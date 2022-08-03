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
  <div class="gl-pt-3">
    <div class="component md typography">
      <nuxt-content :document="page" />
    </div>
    <related-pages :related="page.related" class="gl-mt-6" />
  </div>
</template>
