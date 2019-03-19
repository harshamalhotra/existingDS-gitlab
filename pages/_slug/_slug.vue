<template>
  <div class="content limited m-t-7 m-b-7">
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

  asyncData({ route }) {
    const { path } = route;
    return import(`~/contents${path}.md`).then(({ default: fmResult }) => ({ fmResult }));
  },
};
</script>
