<script>
import Collection from '../../components/collection.vue';

export default {
  components: {
    Collection,
  },
  async asyncData({ $content }) {
    const patternList = await $content('patterns')
      .only(['name', 'summary', 'description', 'path', 'extendedNotice'])
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
    description="Patterns help users accomplish tasks effectively by using elements in predictable combinations and creating repeatable interaction flows."
    :items="patternList"
  />
</template>
