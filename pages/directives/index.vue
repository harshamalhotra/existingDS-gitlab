<script>
import Collection from '../../components/collection.vue';

export default {
  components: {
    Collection,
  },
  async asyncData({ $content }) {
    const directiveList = await $content('directives')
      .only(['name', 'summary', 'description', 'path', 'extendedNotice'])
      .sortBy('name')
      .fetch();

    // Move 'Overview' to the beginning if it exists
    const overviewIndex = directiveList.findIndex((item) => item.name === 'Overview');
    if (overviewIndex !== -1) {
      const [overview] = directiveList.splice(overviewIndex, 1);
      directiveList.unshift(overview);
    }

    return { directiveList };
  },
  head: {
    title: 'Directive collection',
  },
};
</script>

<template>
  <collection
    heading="Directives"
    description="Directives are reusable Vue.js instructions that extend HTML elements with custom behavior. They provide common functionality like detecting clicks outside elements, preloading resources on hover, or sanitizing HTML content."
    :items="directiveList"
  />
</template>
