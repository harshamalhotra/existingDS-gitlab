<script>
import COMPILED_TOKENS from '@gitlab/ui/src/tokens/build/json/tokens.json';
import { GL_COLOR_NEUTRAL_0, GL_COLOR_NEUTRAL_950 } from '@gitlab/ui/src/tokens/build/js/tokens';
import { colorFromBackground, GlBadge, GlTooltipDirective } from '../helpers/gitlab_ui';
import GlColorContrast from './color_contrast.vue';

export default {
  name: 'DesignTokenColorPalette',
  GL_COLOR_NEUTRAL_0,
  GL_COLOR_NEUTRAL_950,
  components: {
    GlBadge,
    GlColorContrast,
  },
  directives: {
    GlTooltip: GlTooltipDirective,
  },
  props: {
    group: {
      type: String,
      required: true,
      default: null,
    },
    subgroup: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    tokens() {
      return this.subgroup
        ? COMPILED_TOKENS.color[this.group][this.subgroup]
        : COMPILED_TOKENS.color[this.group];
    },
  },
  methods: {
    isHex(value) {
      return value.startsWith('#');
    },
    getTokenName(token) {
      return token.path.filter(Boolean).join('.');
    },
    getClasses(value) {
      if (!this.isHex(value)) return '';
      const textColorVariant = colorFromBackground(value, 4.5);
      return {
        'gl-text-neutral-950': textColorVariant === 'dark',
        'gl-text-neutral-0': textColorVariant === 'light',
      };
    },
  },
};
</script>

<template>
  <ul class="background-checkered-pattern !gl-m-0 gl-list-none !gl-p-0">
    <li
      v-for="token in tokens"
      :key="token.name"
      class="gl-flex gl-flex-wrap gl-items-center gl-justify-between gl-gap-3 gl-p-3 gl-leading-normal"
      :class="getClasses(token.$value)"
      :style="{ backgroundColor: token.$value }"
    >
      <code v-gl-tooltip :title="token.comment" class="gl-text-base gl-text-inherit">
        {{ getTokenName(token) }}
      </code>
      <span class="gl-flex gl-items-center gl-gap-3">
        <gl-badge v-if="token.$deprecated" v-gl-tooltip :title="token.comment" variant="danger">
          Deprecated
        </gl-badge>
        <code class="gl-text-base gl-text-inherit">{{ token.$value }}</code>
        <gl-color-contrast
          v-if="isHex(token.$value)"
          :foreground="token.$value"
          :background="$options.GL_COLOR_NEUTRAL_950"
        />
        <gl-color-contrast
          v-if="isHex(token.$value)"
          :foreground="token.$value"
          :background="$options.GL_COLOR_NEUTRAL_0"
        />
      </span>
    </li>
  </ul>
</template>
