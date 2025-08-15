<script>
import Collection from '../../components/collection.vue';

export default {
  components: {
    Collection,
  },
  async asyncData({ $content }) {
    const contentList = await $content('content')
      .only(['name', 'summary', 'description', 'path'])
      .sortBy('name')
      .fetch();

    return { contentList };
  },
  head: {
    title: 'Content collection',
  },
};
</script>

<template>
  <collection
    heading="Product content"
    description="Guidelines for writing clear, consistent, and universal content. It addresses key elements of language and localization in user interface design and content creation for GitLab."
    :items="contentList"
  />
</template>
