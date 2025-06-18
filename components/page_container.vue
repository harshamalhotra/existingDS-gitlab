<script>
export default {
  props: {
    tag: {
      type: String,
      required: false,
      default: 'div',
    },
    maxWidth: {
      type: String,
      required: false,
      default: '72rem',
    },
  },
};
</script>
<template>
  <component
    :is="tag"
    class="gl-mx-auto gl-my-0 gl-w-full gl-px-5 sm:gl-px-7"
    :style="{ 'max-width': maxWidth }"
  >
    <slot></slot>
  </component>
</template>
