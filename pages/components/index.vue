<script>
import Collection from '../../components/collection.vue';

export default {
  components: {
    Collection,
  },
  async asyncData({ $content }) {
    const componentList = await $content('components')
      .only(['name', 'summary', 'description', 'path'])
      .sortBy('name')
      .fetch();

    return { componentList };
  },
  head: {
    title: 'Component collection',
  },
};
</script>

<template>
  <collection
    heading="Pajamas components"
    description="A component is a UI element that serves a singular purpose or function. Two or more simple components can combine to form a composite component that still has a single function. For example, an avatar, button, or combobox."
    :items="componentList"
  />
</template>
