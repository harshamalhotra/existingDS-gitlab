<script>
import NotFound from '../components/error/not_found.vue';
import Default from '../components/error/default.vue';

export default {
  components: {
    NotFound,
    Default,
  },
  layout: 'no_footer',
  props: {
    error: {
      type: Object,
      required: false,
      default: null,
    },
  },
  computed: {
    details() {
      return [this.error?.message, this.error?.stack].filter(Boolean).join('\n\n');
    },
    showDefaultError() {
      // 404s in production, we want to render our 404 page
      if (this.error?.statusCode === 404 && process.env.NODE_ENV === 'production') {
        return false;
      }
      return true;
    },
  },
};
</script>
<template>
  <default v-if="showDefaultError">
    <template v-if="details" #details>{{ details }}</template>
  </default>
  <not-found v-else />
</template>
