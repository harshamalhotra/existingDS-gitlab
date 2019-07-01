<template>
  <div class="content limited m-t-7 m-b-8">
    <no-ssr>
      <component-info
        :frontmatter-info="fmResult"
      />
    </no-ssr>
  </div>
</template>

<script>
export default {
  components: {
    ComponentInfo: () => (process.browser ? import('../../components/componentinfo.vue') : null),
  },
  editThisPage: {
    resolve: ({ route }) => `contents${route.path}.md`,
  },
  asyncData({ route }) {
    const { path } = route;
    return import(`~/contents${path}.md`).then(({ default: fmResult }) => ({ fmResult }));
  },
};
</script>
