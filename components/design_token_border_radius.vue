<script>
export default {
  name: 'DesignTokenBorderRadius',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <span
    aria-hidden="true"
    class="gl-block gl-h-9 gl-w-9 gl-bg-neutral-300 dark:gl-bg-neutral-700"
    :style="{ 'border-radius': value }"
  ></span>
</template>
