<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div
    class="gl-border gl-relative gl-mb-6 gl-h-0 gl-overflow-hidden"
    style="padding-bottom: 56.25%"
  >
    <iframe
      :aria-label="label"
      class="gl-absolute gl-inset-0 gl-h-full gl-w-full"
      frameborder="0"
      :src="src"
      allowfullscreen
      role="img"
    ></iframe>
  </div>
</template>
