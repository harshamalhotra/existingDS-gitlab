<script>
import { GlNav, GlNavItem } from '../../helpers/gitlab_ui';

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

const componentNameToLabelMap = {
  dropdowns: 'dropdown',
  forms: 'form',
  labels: 'label',
  modals: 'modal',
  'radio-button': 'radio',
  tables: 'table',
  tabs: 'tab',
  toggles: 'toggle',
};

export default {
  components: {
    GlNav,
    GlNavItem,
  },
  scrollToTop: true,
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
  head() {
    return {
      title: this.page.name,
    };
  },
  computed: {
    componentLabel() {
      const { section, slug } = this.$route.params;
      if (section !== 'components') {
        return null;
      }
      return componentNameToLabelMap[slug] || slug;
    },
    hasStories() {
      return Boolean(this.page?.stories?.length);
    },
    showTabs() {
      return this.hasStories || Boolean(this.page?.tabs?.length);
    },
    tabs() {
      let { tabs = [] } = this.page;

      tabs = [
        {
          route: 'section-slug',
          title: 'Usage',
        },
        ...tabs,
      ];

      if (this.hasStories) {
        tabs.push({
          route: 'section-slug-code',
          title: 'Implementation (Vue.js)',
        });
      }

      tabs.push({
        route: 'section-slug-lookbook',
        title: 'Implementation (ViewComponent)',
      });

      if (this.componentLabel) {
        tabs.push({
          route: 'section-slug-contribute',
          title: 'Contribute',
        });
      }
      return tabs;
    },
    lastUpdatedAt() {
      const { lastGitUpdate } = this.page || {};
      if (!lastGitUpdate) {
        return null;
      }
      return new Date(lastGitUpdate).toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });
    },
  },
};
</script>

<template>
  <div class="container gl-py-7">
    <div class="md typography gl-mb-6">
      <h1 id="skipTarget" tabindex="-1">{{ page.name }}</h1>
      <div
        v-if="page.deprecated"
        role="alert"
        class="gl-bg-orange-50 gl-px-5 gl-py-3 gl-mb-3 gl-display-flex gl-align-items-center"
      >
        <span class="gl-text-orange-600 gl-mr-3">⚠️</span>
        Please refrain from using this component - it is about to be deprecated!
      </div>
      <p>{{ page.description }}</p>
    </div>
    <div v-if="showTabs" class="app-styles">
      <gl-nav class="gl-tabs-nav gl-mb-5!">
        <gl-nav-item
          v-for="tab in tabs"
          :key="tab.route"
          exact
          :to="{ name: tab.route, params: $route.params }"
          link-classes="gl-tab-nav-item"
          active-class="gl-tab-nav-item-active"
        >
          {{ tab.title }}
        </gl-nav-item>
      </gl-nav>
    </div>
    <nuxt-child :page="page" :component-label="componentLabel" />
    <p v-if="lastUpdatedAt" class="row gl-justify-content-center gl-mt-5">
      Last updated at:&nbsp;<time :datetime="lastUpdatedAt">{{ lastUpdatedAt }}</time>
    </p>
  </div>
</template>
