<script>
export default {
  name: 'DesignTokenTypography',
  props: {
    family: {
      type: String,
      required: false,
      default: null,
    },
    size: {
      type: String,
      required: false,
      default: null,
    },
    weight: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<template>
  <span
    aria-hidden="true"
    class="gl-grid gl-h-9 gl-w-9 gl-place-items-center gl-rounded-default"
    :style="{ 'font-family': family, 'font-size': size, 'font-weight': weight }"
  >
    Aa
  </span>
</template>
