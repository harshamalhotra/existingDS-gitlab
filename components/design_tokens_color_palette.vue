<script>
import COMPILED_TOKENS from '@gitlab/ui/src/tokens/build/json/tokens.json';
import { colorFromBackground, GlBadge, GlTooltipDirective } from '../helpers/gitlab_ui';
import GlColorContrast from './color_contrast.vue';

export default {
  name: 'DesignTokenColorPalette',
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
      required: false,
      default: null,
    },
    subgroup: {
      type: String,
      required: false,
      default: null,
    },
    isBackgroundColorStory: {
      type: Boolean,
      required: false,
      default: true,
    },
    lightBackground: {
      type: String,
      required: false,
      default: '#fff',
    },
    darkBackground: {
      type: String,
      required: false,
      default: '#18171d',
    },
    containerClass: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    tokens() {
      if (this.group && this.subgroup) {
        return COMPILED_TOKENS.color[this.group][this.subgroup];
      }
      if (this.group) {
        return COMPILED_TOKENS.color[this.group];
      }
      return COMPILED_TOKENS.color;
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
      if (!this.isBackgroundColorStory) return '';

      const textColorVariant = colorFromBackground(value, 4.5);
      return {
        'gl-text-neutral-950': textColorVariant === 'dark',
        'gl-text-neutral-0': textColorVariant === 'light',
      };
    },
    getStyle(value) {
      if (this.isBackgroundColorStory) {
        return { backgroundColor: value };
      }

      return { color: value };
    },
  },
};
</script>

<template>
  <div :class="containerClass">
    <ul class="gl-m-0 gl-list-none gl-p-0">
      <li
        v-for="token in tokens"
        :key="token.name"
        class="gl-flex gl-flex-wrap gl-items-center gl-justify-between gl-gap-3 gl-p-3 gl-leading-20"
        :class="getClasses(token.$value)"
        :style="getStyle(token.$value)"
      >
        <code v-gl-tooltip :title="token.comment" class="gl-text-inherit">
          {{ getTokenName(token) }}
        </code>
        <div class="gl-flex gl-items-center gl-gap-3">
          <gl-badge v-if="token.$deprecated" v-gl-tooltip :title="token.comment" variant="danger">
            Deprecated
          </gl-badge>
          <code class="gl-text-inherit">{{ token.$value }}</code>
          <gl-color-contrast
            v-if="isHex(token.$value)"
            :foreground="token.$value"
            :background="darkBackground"
          />
          <gl-color-contrast
            v-if="isHex(token.$value)"
            :foreground="token.$value"
            :background="lightBackground"
          />
        </div>
      </li>
    </ul>
  </div>
</template>
