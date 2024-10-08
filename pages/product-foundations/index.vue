<script>
import Collection from '../../components/collection.vue';

export default {
  components: {
    Collection,
  },
  async asyncData({ $content }) {
    const foundationsList = await $content('product-foundations')
      .only(['name', 'summary', 'description', 'path'])
      .sortBy('name')
      .fetch();

    return { foundationsList };
  },
  head: {
    title: 'Foundations collection',
  },
};
</script>

<template>
  <collection
    heading="Foundations"
    description="Foundational items communicate the opinionated way in which basic visual design attributes, elements, and concepts come together to create a distinct GitLab personality that's expressed in the UI. For example, color, typography, and iconography."
    :items="foundationsList"
  />
</template>
