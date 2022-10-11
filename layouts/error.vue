<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  computed: {
    title() {
      return this.error?.statusCode === 404 ? 'Page not found' : 'An Error occurred';
    },
    details() {
      return [this.error?.message, this.error?.stack].filter(Boolean).join('\n');
    },
  },
};
</script>
<template>
  <div class="index typography">
    <h1 class="gl-text-center">{{ title }}</h1>
    <NuxtLink to="/">Back to a safe haven!</NuxtLink>
    <pre v-if="details" class="text-left">{{ details }}</pre>
  </div>
</template>
