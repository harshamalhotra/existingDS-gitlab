<script>
import Fuse from 'fuse.js';
import COMPILED_TOKENS from '@gitlab/ui/src/tokens/build/json/tokens.json';
import COMPILED_DARK_TOKENS from '@gitlab/ui/src/tokens/build/json/tokens.dark.json';
import COMPILED_TAILWIND_TOKENS from '@gitlab/ui/src/tokens/build/docs/tokens-tailwind-docs.json';
import {
  GlBadge,
  GlButton,
  GlButtonGroup,
  GlSearchBoxByType,
  GlTable,
  GlPagination,
  GlTooltipDirective,
} from '../helpers/gitlab_ui';
import DesignTokenBorderRadius from './design_token_border_radius.vue';
import DesignTokenColor from './design_token_color.vue';
import DesignTokenDimension from './design_tokens_dimension.vue';
import DesignTokenTypography from './design_token_typography.vue';
import DesignTokenValue from './design_token_value.vue';

const QUERY_PARAMETER = 'q';

export default {
  name: 'DesignTokensTable',
  components: {
    GlBadge,
    GlButton,
    GlButtonGroup,
    GlSearchBoxByType,
    GlTable,
    GlPagination,
    DesignTokenBorderRadius,
    DesignTokenColor,
    DesignTokenDimension,
    DesignTokenTypography,
    DesignTokenValue,
  },
  directives: {
    GlTooltip: GlTooltipDirective,
  },
  props: {
    group: {
      type: String,
      required: false,
      default: null,
    },
    subgroup: {
      type: String,
      required: false,
      default: null,
    },
  },
  fields: [
    {
      key: 'sample',
      label: 'Sample',
      thClass: 'gl-w-12',
    },
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'value',
      label: 'Value',
      thClass: 'gl-w-2/5',
    },
  ],
  data() {
    return {
      selected: 'all',
      filter: '',
      currentPage: 1,
      perPage: 50,
      totalFilteredItems: 0,
    };
  },
  computed: {
    isAll() {
      return this.selected === 'all';
    },
    isTailwind() {
      return this.selected === 'tailwind';
    },
    tokens() {
      if (this.isTailwind) {
        return COMPILED_TAILWIND_TOKENS;
      }
      if (this.group && this.subgroup) {
        return COMPILED_TOKENS[this.group][this.subgroup];
      }
      if (this.group) {
        return COMPILED_TOKENS[this.group];
      }
      return COMPILED_TOKENS;
    },
  },
  watch: {
    filter(newValue) {
      this.resetCurrentPage();
      this.updateUrlQuery(newValue);
    },
  },
  mounted() {
    this.initializeFromUrl();
  },
  methods: {
    initializeFromUrl() {
      if (typeof window === 'undefined') return;
      const urlParams = new URLSearchParams(window.location.search);
      const queryParam = urlParams.get(QUERY_PARAMETER);
      if (queryParam) {
        this.filter = queryParam;
      }
    },
    updateUrlQuery(searchTerm) {
      if (typeof window === 'undefined') return;
      const url = new URL(window.location);
      if (searchTerm) {
        url.searchParams.set(QUERY_PARAMETER, searchTerm);
      } else {
        url.searchParams.delete(QUERY_PARAMETER);
      }
      window.history.replaceState({}, '', url);
    },
    isColor(type) {
      return type === 'color';
    },
    isAliasValue(value) {
      return typeof value === 'string' && value.includes('{');
    },
    isAliasObject(value) {
      return (
        typeof value === 'object' && Object.values(value).some((val) => this.isAliasValue(val))
      );
    },
    getAliasValueName(value) {
      if (this.isAliasValue(value)) {
        return value.slice(1, -1);
      }
      return value;
    },
    getValueLabel(value, type) {
      if (this.isAliasObject(value)) {
        return this.getAliasValueName(value);
      }
      if (this.isAliasValue(value)) {
        return this.getAliasValueName(value);
      }
      switch (type) {
        case 'fontFamily':
          return value.join(', ');
        case 'shadow':
        case 'typography':
          // Return null for composite tokens as values don't represent CSS output
          return null;
        default:
          return value;
      }
    },
    getDarkValueLabel(tokenPath, type) {
      const darkToken = this.getTokenByPath(COMPILED_DARK_TOKENS, tokenPath);
      if (!darkToken) return null;
      return this.getValueLabel(darkToken.original.$value, type);
    },
    getTokenByPath(tokens, path) {
      return path.reduce((current, segment) => {
        return current && current[segment];
      }, tokens);
    },
    transformTokenToTableColumns(token) {
      return {
        id: token.path.filter(Boolean).join('-'),
        name: this.formatTokenName('name', token),
        type: token.$type,
        hex: token.value,
        value: token.original.$value,
        valueLabel: this.getValueLabel(token.original.$value, token.original.$type),
        darkValueLabel: this.getDarkValueLabel(token.path, token.original.$type),
        deprecated: token.$deprecated ? 'deprecated' : '',
        description: token.$description,
        className: this.formatContextToClass(token.context),
        cssValue: token.cssWithValue,
        figmaName: this.formatTokenName('figma', token),
        cssName: this.formatTokenName('css', token),
        scssName: this.formatTokenName('scss', token),
      };
    },
    filterItems(items, filter) {
      if (!filter) return items;

      const fuse = new Fuse(items, {
        keys: Object.keys(items[0]),
        includeScore: true,
      });
      const results = fuse.search(filter);

      return results
        .sort((a, b) => {
          if (a.item.deprecated && !b.item.deprecated) return 1;
          if (!a.item.deprecated && b.item.deprecated) return -1;
          return a.score - b.score;
        })
        .map(({ item }) => item);
    },
    paginateItems(items, currentPage, perPage) {
      const start = (currentPage - 1) * perPage;
      return items.slice(start, start + perPage);
    },
    itemsProvider({ currentPage, perPage, filter }) {
      try {
        const items = this.transformTokensToTableRows(this.tokens, []);
        const filteredItems = this.filterItems(items, filter);
        this.totalFilteredItems = filteredItems.length;
        const paginatedFilteredItems = this.paginateItems(filteredItems, currentPage, perPage);
        return paginatedFilteredItems;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Failed to provide items', e);
        return [];
      }
    },
    transformTokensToTableRows(tokens, context = []) {
      // Add null/undefined check
      if (!tokens || typeof tokens !== 'object') {
        return [];
      }

      const tokensArray = [];

      Object.keys(tokens).forEach((key) => {
        const token = tokens[key];

        // Skip if token is null/undefined
        if (!token || typeof token !== 'object') {
          return;
        }

        if (this.isTailwind && token.$value) {
          tokensArray.push(
            this.transformTokenToTableColumns({ ...token, context: [...context, key] }),
          );
        } else if (this.isTailwind && key !== 'colors') {
          tokensArray.push(...this.transformTokensToTableRows(token, [...context, key]));
        } else if (token.$value) {
          tokensArray.push(this.transformTokenToTableColumns(token));
        } else {
          // Only recurse if the token has properties that could contain more tokens
          const hasNestedTokens = Object.values(token).some(
            (value) =>
              value && typeof value === 'object' && (value.$value || Object.keys(value).length > 0),
          );

          if (hasNestedTokens) {
            tokensArray.push(...this.transformTokensToTableRows(token, context));
          }
        }
      });

      // First separate deprecated and non-deprecated items
      const deprecatedItems = tokensArray.filter((item) => item.deprecated);
      const regularItems = tokensArray.filter((item) => !item.deprecated);

      // Apply natural sort to regular items
      regularItems.sort((a, b) => {
        return a.id.localeCompare(b.id, undefined, { numeric: true, sensitivity: 'base' });
      });

      // Combine the arrays: regular items first, then deprecated
      return [...regularItems, ...deprecatedItems];
    },
    formatTokenName(format, token) {
      let figmaPrefix = '';
      const prefix = token.prefix === false ? '' : 'gl';
      switch (format) {
        case 'figma':
          if (token.filePath.match('contextual')) {
            figmaPrefix = '🔒/';
          }
          if (token.$deprecated) {
            figmaPrefix = '⚠️ DEPRECATED/';
          }
          return `${figmaPrefix}${token.path.filter(Boolean).join('-')}`;
        case 'css':
          return `var(--${[prefix, ...token.path].filter(Boolean).join('-')})`;
        case 'scss':
          return `$${[prefix, ...token.path].filter(Boolean).join('-')}`;
        default:
          return token.path.filter(Boolean).join('.');
      }
    },
    formatContextToClass(context) {
      if (!this.isTailwind) return null;

      const cleanContext = context.filter((segment) => segment !== 'color');
      const tailwindContextMap = {
        background: 'bg',
        borderRadius: 'rounded',
        boxShadow: 'shadow',
        fontFamily: 'font',
        fontSize: 'text',
        fontWeight: 'font',
        lineHeight: 'leading',
      };

      cleanContext[0] = tailwindContextMap[cleanContext[0]] || cleanContext[0];
      // eslint-disable-next-line @gitlab/tailwind-no-interpolation
      return `gl-${cleanContext.join('-')}`;
    },
    copyToClipboard(value) {
      navigator.clipboard.writeText(value);
    },
    resetCurrentPage() {
      this.currentPage = 1;
    },
    refresh() {
      this.$root.$emit('bv::refresh::table', 'tokens-table');
    },
    updateSelected(value) {
      this.selected = value;
      this.resetCurrentPage();
      this.refresh();
    },
  },
};
</script>

<template>
  <div>
    <div class="gl-mb-5 gl-flex gl-items-center gl-gap-3">
      <gl-button-group v-if="!group">
        <gl-button :selected="isAll" @click="updateSelected('all')">All tokens</gl-button>
        <gl-button :selected="isTailwind" @click="updateSelected('tailwind')">
          Tailwind classes
        </gl-button>
      </gl-button-group>
      <gl-search-box-by-type v-model="filter" debounce="250" class="gl-grow" />
    </div>
    <gl-table
      id="tokens-table"
      :filter="filter"
      :items="itemsProvider"
      :fields="$options.fields"
      :tbody-tr-attr="(item) => ({ id: item.id })"
      :current-page="currentPage"
      :per-page="perPage"
      hover
      fixed
      stacked="sm"
    >
      <template #cell(sample)="{ item: { name, type, cssName } }">
        <design-token-border-radius v-if="name.includes('radius')" :value="cssName" />
        <design-token-color v-else-if="type === 'color'" :color="cssName" :name="name" size="lg" />
        <design-token-typography v-else-if="type === 'fontFamily'" :family="cssName" />
        <design-token-typography v-else-if="name.includes('font.size')" :size="cssName" />
        <design-token-typography v-else-if="type === 'fontWeight'" :weight="cssName" />
        <design-token-dimension v-else-if="type === 'dimension'" direction="col" :value="cssName" />
      </template>
      <template
        #cell(name)="{
          item: { name, deprecated, description, className, figmaName, cssName, scssName, type },
        }"
      >
        <div class="gl-mb-3">
          <div class="gl-flex gl-items-center gl-gap-3">
            <code class="gl-text-base gl-font-bold gl-text-strong">
              {{ isTailwind ? className : name }}
            </code>
            <gl-button
              v-gl-tooltip
              title="Copy token name value to clipboard"
              icon="copy-to-clipboard"
              aria-label="Copy token name value to clipboard"
              size="small"
              @click="copyToClipboard(isTailwind ? className : name)"
            />
            <gl-badge v-if="deprecated" variant="danger">Deprecated</gl-badge>
          </div>
          <p v-if="description" class="!gl-m-0 gl-text-sm gl-leading-20 gl-text-subtle">
            {{ description }}
          </p>
        </div>
        <ul
          v-if="type !== 'typography'"
          class="gl-mb-0 gl-ml-0 gl-mt-2 gl-flex gl-list-none gl-flex-col !gl-p-0"
        >
          <li v-if="isTailwind" class="gl-text-sm">
            <span class="gl-inline-block gl-w-8">Token:</span> {{ name }}
            <gl-button
              v-gl-tooltip
              title="Copy token name value to clipboard"
              icon="copy-to-clipboard"
              aria-label="Copy token name value to clipboard"
              size="small"
              category="tertiary"
              @click="copyToClipboard(name)"
            />
          </li>
          <li class="gl-text-sm">
            <span class="gl-inline-block gl-w-8">Figma:</span> {{ figmaName }}
            <gl-button
              v-gl-tooltip
              title="Copy Figma value to clipboard"
              icon="copy-to-clipboard"
              aria-label="Copy Figma value to clipboard"
              size="small"
              category="tertiary"
              @click="copyToClipboard(figmaName)"
            />
          </li>
          <li class="gl-text-sm">
            <span class="gl-inline-block gl-w-8">CSS:</span> {{ cssName }}
            <gl-button
              v-gl-tooltip
              title="Copy CSS value to clipboard"
              icon="copy-to-clipboard"
              aria-label="Copy CSS value to clipboard"
              size="small"
              category="tertiary"
              @click="copyToClipboard(cssName)"
            />
          </li>
          <li class="gl-text-sm">
            <span class="gl-inline-block gl-w-8">SCSS:</span> {{ scssName }}
            <gl-button
              v-gl-tooltip
              title="Copy SCSS value to clipboard"
              icon="copy-to-clipboard"
              aria-label="Copy SCSS value to clipboard"
              size="small"
              category="tertiary"
              @click="copyToClipboard(scssName)"
            />
          </li>
        </ul>
      </template>
      <template #cell(value)="{ item: { type, valueLabel, darkValueLabel, cssName } }">
        <ul
          v-if="valueLabel || darkValueLabel"
          class="!gl-m-0 gl-flex gl-list-none gl-flex-col gl-gap-3 !gl-p-0"
        >
          <li>
            <design-token-value
              :css-name="cssName"
              :type="type"
              :value="valueLabel"
              class="gl-light-scope"
            />
          </li>
          <li>
            <design-token-value
              :css-name="cssName"
              :type="type"
              :value="darkValueLabel"
              class="gl-dark-scope"
            />
          </li>
        </ul>
      </template>
    </gl-table>
    <client-only>
      <gl-pagination
        v-model="currentPage"
        align="center"
        :per-page="perPage"
        :total-items="totalFilteredItems"
      />
    </client-only>
  </div>
</template>
