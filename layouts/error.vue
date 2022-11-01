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
      required: true,
    },
  },
  computed: {
    details() {
      return [this.error?.message, this.error?.stack].filter(Boolean).join('\n');
    },
  },
};
</script>
<template>
  <not-found v-if="error.statusCode === 404" />
  <default v-else>
    <template v-if="details" #details>{{ details }}</template>
  </default>
</template>
