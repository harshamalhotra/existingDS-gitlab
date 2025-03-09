<script>
export default {
  props: {
    tag: {
      type: String,
      required: false,
      default: 'div',
    },
  },
};
</script>
<template>
  <component
    :is="tag"
    class="gl-mx-auto gl-my-0 gl-w-full gl-px-5 sm:gl-px-7"
    style="max-width: 54rem"
  >
    <slot></slot>
  </component>
</template>
