<script>
import NotFound from '../components/error/not_found.vue';

/**
 * This component is a special 404 page just for nginx,
 * in development we fall back to the good old
 * layouts/error.vue
 */
export default {
  components: { NotFound },
  layout: 'no_footer',
};
</script>
<template>
  <not-found />
</template>
