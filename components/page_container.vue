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
  <component :is="tag" class="gl-mx-auto gl-my-0 gl-w-full gl-max-w-6xl gl-px-5 sm:gl-px-7">
    <slot></slot>
  </component>
</template>
