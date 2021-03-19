<script>
import { mapState } from 'vuex';

export default {
  components: {
    ComponentInfo: () => (process.browser ? import('../../components/componentinfo.vue') : null),
  },
  editThisPage: {
    resolve: ({ route }) => `contents${route.path.replace(/\/+$/, '')}.md`,
  },
  computed: {
    ...mapState(['frontmatter']),
  },
};
</script>

<template>
  <div class="content limited m-t-7 m-b-8">
    <no-ssr>
      <component-info :frontmatter-info="frontmatter" />
    </no-ssr>
  </div>
</template>
