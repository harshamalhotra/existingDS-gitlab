<script>
export default {
  name: 'DesignTokenDimension',
  props: {
    direction: {
      type: String,
      required: false,
      default: 'row',
      validator: (value) => ['row', 'col'].includes(value),
    },
    sizeClass: {
      type: String,
      required: false,
      default: null,
    },
    value: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    isColumn() {
      return this.direction === 'col';
    },
  },
};
</script>

<template>
  <div class="gl-flex gl-items-center" :class="{ 'gl-flex-col': isColumn }">
    <div
      class="gl-h-3 gl-w-3 gl-shrink-0 gl-rounded-full gl-bg-neutral-700 dark:gl-bg-neutral-300"
    ></div>
    <div
      :class="[
        'gl-bg-neutral-300 dark:gl-bg-neutral-700',
        sizeClass,
        { 'gl-w-6': isColumn, 'gl-h-6': !isColumn },
      ]"
      :style="{ height: isColumn ? value : null, width: !isColumn ? value : null }"
    ></div>
    <div
      class="gl-h-3 gl-w-3 gl-shrink-0 gl-rounded-full gl-bg-neutral-700 dark:gl-bg-neutral-300"
    ></div>
  </div>
</template>
