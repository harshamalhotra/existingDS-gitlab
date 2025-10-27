<script>
import DesignTokenColor from './design_token_color.vue';

export default {
  name: 'DesignTokenValue',
  components: {
    DesignTokenColor,
  },
  props: {
    cssName: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: [Number, String],
      required: true,
    },
  },
};
</script>

<template>
  <code
    class="gl-inline-flex gl-gap-2 gl-rounded-default gl-bg-strong gl-px-2 gl-py-1 gl-text-sm gl-text-strong"
  >
    <design-token-color v-if="type === 'color'" :color="cssName" />
    <span class="gl-inline-block">{{ value }}</span>
  </code>
</template>
