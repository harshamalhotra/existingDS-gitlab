<script>
import { mapState } from 'vuex';

export default {
  components: {
    ComponentInfo: () => (process.browser ? import('../../components/componentinfo.vue') : null),
  },
  editThisPage: {
    resolve: ({ route }) => `contents${route.path.replace(/\/+$/, '')}.md`,
  },
  async asyncData({ $content, route }) {
    const path = route.path.replace(/^\/+/, '').replace(/\/(code|contribute)$/, '');
    const page = await $content(path)
      .fetch()
      .catch((err) => {
        console.log(`Could not load content for ${path}`, err);
      });
    return { page };
  },
  computed: {
    ...mapState(['frontmatter']),
  },
};
</script>

<template>
  <div class="content limited m-t-7 m-b-8">
    <no-ssr>
      <component-info :frontmatter-info="frontmatter" :page="page" />
    </no-ssr>
  </div>
</template>
