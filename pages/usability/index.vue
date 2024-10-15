<script>
import Collection from '../../components/collection.vue';

export default {
  components: {
    Collection,
  },
  async asyncData({ $content }) {
    const usabilityList = await $content('usability')
      .only(['name', 'summary', 'description', 'path'])
      .sortBy('name')
      .fetch();

    return { usabilityList };
  },
  head: {
    title: 'Usability collection',
  },
};
</script>

<template>
  <collection
    heading="Usability content"
    description="Principles and best practices for designing cohesive, user-centered interactions throughout GitLab."
    :items="usabilityList"
  />
</template>
