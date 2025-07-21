<script>
import RelatedPages from '../../../components/related_pages.vue';

export default {
  components: {
    RelatedPages,
  },
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div>
    <div v-live-examples class="md">
      <nuxt-content :document="page" />
    </div>
    <related-pages :related="page.related" class="gl-mt-6" />
  </div>
</template>
