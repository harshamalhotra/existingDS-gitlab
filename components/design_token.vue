<script>
import ColorChip from './color_chip.vue';

export default {
  name: 'DesignToken',
  components: {
    ColorChip,
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
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <code
    class="gl-inline-flex gl-gap-2 gl-rounded-base gl-bg-strong gl-px-2 gl-py-1 gl-text-sm gl-text-strong"
  >
    <color-chip v-if="type === 'color'" :color="cssName" />
    <span class="gl-inline-block">{{ value }}</span>
  </code>
</template>
