<script>
import PageContainer from '../../components/page_container.vue';
import PageHeader from '../../components/page_header.vue';
import PageNavigation from '../../components/page_navigation.vue';
import ExtendedNotice from '../../components/extended_notice.vue';
import { buildMeta } from '../../helpers/seo';

/*
We only need the "section" and "slug" of the routes to find the file.
https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1293
*/
const getPathFromRoute = (route) => {
  const { section, slug } = route.params;
  return [section, slug].filter(Boolean).join('/');
};

const getSectionFromRoute = (route) => route.params.section;

export default {
  components: {
    PageContainer,
    PageHeader,
    PageNavigation,
    ExtendedNotice,
  },
  scrollToTop: true,
  editThisPage: {
    resolve: ({ route }) => `contents/${getPathFromRoute(route)}.md`,
  },
  async asyncData({ $content, route, error }) {
    const path = getPathFromRoute(route);

    let page = null;

    try {
      page = await $content(path).fetch();
      page.section = getSectionFromRoute(route);
    } catch (e) {
      error({ statusCode: 404, path, message: `${path} not found`, stack: e.stack });
    }

    if (Array.isArray(page)) {
      error({
        statusCode: 500,
        path,
        message: `@nuxt/content returned an array of pages instead of a single page for '${path}'`,
      });
    }

    return { page };
  },
  data() {
    return {
      page: {},
    };
  },
  head() {
    return {
      title: this.page.name,
      meta: buildMeta({
        titleChunk: this.page.name,
        path: this.page.path,
        description: this.page.description,
      }),
    };
  },
  computed: {
    hidePageNavigation() {
      return Boolean(this.page.hidePageNavigation);
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
    hasExtendedNotice() {
      return Boolean(this.page.extendedNotice);
    },
  },
};
</script>

<template>
  <page-container class="gl-py-7">
    <div class="gl-flex gl-flex-col gl-items-start gl-gap-7 lg:gl-flex-row">
      <page-navigation
        v-if="!hidePageNavigation"
        class="lg:gl-order-2"
        content-selector=".nuxt-content"
        :heading-levels="page.navigationHeadingLevels"
      />
      <div class="gl-shrink gl-grow lg:gl-order-1">
        <page-header
          :heading="page.name"
          :description="page.description"
          :section="page.section"
          :deprecated="page.deprecated"
        />
        <extended-notice
          v-if="hasExtendedNotice"
          :scope="page.extendedNotice.scope || page.title"
          :contact-preset="page.extendedNotice.contactPreset"
          :owners="page.extendedNotice.owners"
          :contacts="page.extendedNotice.contacts"
        />
        <nuxt-child :page="page" />
        <p v-if="lastUpdatedAt" class="gl-mb-0 gl-mt-5 gl-text-center">
          Last updated at:&nbsp;<time :datetime="lastUpdatedAt">{{ lastUpdatedAt }}</time>
        </p>
      </div>
    </div>
  </page-container>
</template>
