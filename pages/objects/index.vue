<script>
import Collection from '../../components/collection.vue';

export default {
  components: {
    Collection,
  },
  async asyncData({ $content }) {
    const objectList = await $content('objects')
      .only(['name', 'summary', 'description', 'path'])
      .sortBy('name')
      .fetch();

    // Move 'Overview' to the beginning if it exists
    const overviewIndex = objectList.findIndex((item) => item.name === 'Overview');
    if (overviewIndex !== -1) {
      const [overview] = objectList.splice(overviewIndex, 1);
      objectList.unshift(overview);
    }

    return { objectList };
  },
  head: {
    title: 'Object collection',
  },
};
</script>

<template>
  <collection
    heading="Objects"
    description="An object is a conceptual building block or concept that defines how we think about something independent of its visual representation or interaction model."
    :items="objectList"
  />
</template>
