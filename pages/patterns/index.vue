<script>
import Collection from '../../components/collection.vue';

export default {
  components: {
    Collection,
  },
  async asyncData({ $content }) {
    const patternList = await $content('patterns')
      .only(['name', 'summary', 'description', 'path'])
      .sortBy('name')
      .fetch();

    return { patternList };
  },
  head: {
    title: 'Pattern collection',
  },
};
</script>

<template>
  <collection
    heading="Patterns"
    description="A pattern combines components and/or content elements into a repeatable, consistent group that has a shared purpose, content association, or both. For example, filtering, forms, or navigation."
    :items="patternList"
  />
</template>
