<script>
export default {
  components: {
    ComponentInfo: () => (process.browser ? import('../../components/componentinfo.vue') : null),
  },
  editThisPage: {
    resolve: ({ route }) => `contents${route.path.replace(/\/+$/, '')}.md`,
  },
  async asyncData({ $content, route, error }) {
    const path = route.path.replace(/^\/+/, '').replace(/\/(code|contribute)$/, '');

    const page = await $content(path)
      .fetch()
      .catch((e) => {
        error({ statusCode: 404, path, message: `${path} not found`, stack: e.stack });
      });

    if (Array.isArray(page)) {
      error({
        statusCode: 500,
        path,
        message: `@nuxt/content returned an array of pages instead of a single page for '${path}'`,
      });
    }

    return { page };
  },
};
</script>

<template>
  <div class="content limited m-t-7 m-b-8">
    <no-ssr>
      <component-info :page="page" />
    </no-ssr>
  </div>
</template>
