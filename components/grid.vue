<script>
export default {
  props: {
    tag: {
      type: String,
      required: false,
      default: 'div',
    },
    columns: {
      type: [Number, String],
      required: false,
      default: 2,
    },
    gap: {
      type: [Number, String],
      required: false,
      default: 5,
    },
  },
  computed: {
    classes() {
      const columnClasses = {
        2: 'md:gl-grid-cols-2',
        3: 'md:gl-grid-cols-3',
        4: 'md:gl-grid-cols-4',
      };
      const gapClasses = {
        3: 'gl-gap-3',
        5: 'gl-gap-5',
        7: 'gl-gap-7',
      };
      return [columnClasses[this.columns], gapClasses[this.gap]];
    },
  },
};
</script>
<template>
  <component
    :is="tag"
    class="gl-m-0 gl-mb-5 gl-grid gl-list-none gl-p-0 last:gl-mb-0"
    :class="classes"
  >
    <slot></slot>
  </component>
</template>
