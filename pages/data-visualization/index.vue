<script>
import Collection from '../../components/collection.vue';

export default {
  components: {
    Collection,
  },
  async asyncData({ $content }) {
    const dataVizList = await $content('data-visualization')
      .only(['name', 'summary', 'description', 'path'])
      .sortBy('name')
      .fetch();

    // Move 'Overview' to the beginning if it exists
    const overviewIndex = dataVizList.findIndex((item) => item.name === 'Overview');
    if (overviewIndex !== -1) {
      const [overview] = dataVizList.splice(overviewIndex, 1);
      dataVizList.unshift(overview);
    }

    return { dataVizList };
  },
  head: {
    title: 'Data visualization collection',
  },
};
</script>

<template>
  <collection
    heading="Data visualization"
    description="A data visualization pulls insights from a data set into a narrative, allowing a user to explore data and discover insights."
    :items="dataVizList"
  />
</template>
