<script>
/*
We only need the "section" and "slug" of the routes to find the file.
Currently the "third" component is the "tab" (e.g. implementation on component pages)
and that is handled inside `componentinfo.vue` until we have better routing:
https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1293
*/
const getPathFromRoute = (route) => {
  const { section, slug } = route.params;
  return [section, slug].filter(Boolean).join('/');
};

export default {
  components: {
    ComponentInfo: () => (process.browser ? import('../../components/componentinfo.vue') : null),
  },
  editThisPage: {
    resolve: ({ route }) => `contents/${getPathFromRoute(route)}.md`,
  },
  async asyncData({ $content, route, error }) {
    const path = getPathFromRoute(route);

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
