<script>
import PageNotFound from '../components/page_not_found.vue';

/**
 * This component is a special 404 page just for nginx,
 * in development we fall back to the good old
 * layouts/error.vue
 */
export default {
  components: { PageNotFound },
  layout: 'no_footer',
};
</script>
<template>
  <page-not-found />
</template>
