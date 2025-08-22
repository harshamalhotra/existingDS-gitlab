<script>
export default {
  name: 'DimensionScale',
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
      class="gl-h-3 gl-w-3 gl-shrink-0 gl-rounded-full"
      style="background-color: var(--gl-status-brand-icon-color)"
    ></div>
    <div
      :class="[sizeClass, { 'gl-w-6': isColumn, 'gl-h-6': !isColumn }]"
      style="background-color: var(--gl-status-brand-background-color)"
      :style="{ height: isColumn ? value : null, width: !isColumn ? value : null }"
    ></div>
    <div
      class="gl-h-3 gl-w-3 gl-shrink-0 gl-rounded-full"
      style="background-color: var(--gl-status-brand-icon-color)"
    ></div>
  </div>
</template>
