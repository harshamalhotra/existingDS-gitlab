<template>
  <div class="page">
    <nav class="nav-sidebar">
      <div class="nav-sidebar__header">
        <nuxt-link
          to="/"
          class="nav-sidebar__header-anchor p-a-5"
        >
          <img
            class="w-6 h-6 m-r-3"
            :src="gitlabLogo"
          />
          GitLab Design System
        </nuxt-link>
      </div>
      <div class="nav-sidebar__body m-t-3 m-b-3">
        <details class="nav-sidebar__section" :open="$route.fullPath.startsWith('/getting-started')">
          <summary class="nav-sidebar__section-summary">Getting started</summary>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/getting-started/structure">Structure</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/getting-started/personas">Personas</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/getting-started/contributing">Contributing</nuxt-link>
        </details>

        <details class="nav-sidebar__section" :open="$route.fullPath.startsWith('/styles/')">
          <summary class="nav-sidebar__section-summary">Styles</summary>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/styles/colors">Colors</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/styles/iconography">Iconography</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/styles/motion">Motion</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/styles/illustration">Illustration</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/styles/typography">Typography</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/styles/interactions">Interactions</nuxt-link>
        </details>

        <details class="nav-sidebar__section" :open="$route.fullPath.startsWith('/layout/')">
          <summary class="nav-sidebar__section-summary">Layout</summary>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/layout/spacing">Spacing</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/layout/grid">Grid</nuxt-link>
        </details>

        <details class="nav-sidebar__section" :open="$route.fullPath.startsWith('/components/')">
          <summary class="nav-sidebar__section-summary">Components</summary>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/alerts">Alerts</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/avatar">Avatar</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/badges">Badges</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/breadcrumbs">Breadcrumbs</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/buttons">Buttons</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/code-snippets">Code snippets</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/data-tables">Data tables</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/data-visualization">Data visualization</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/date-picker">Date picker</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/dropdowns">Dropdowns</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/file-uploader">File uploader</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/forms">Forms</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/labels">Labels</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/lists">Lists</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/modals">Modals</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/notifications">Notifications</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/pagination">Pagination</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/popovers">Popovers</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/search">Search</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/segmented-control">Segmented control</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/skeleton-loader">Skeleton loader</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/spinner">Spinner</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/tabs">Tabs</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/tags">Tags</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/toggles">Toggles</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/components/tooltips">Tooltips</nuxt-link>
        </details>

        <details class="nav-sidebar__section" :open="$route.fullPath.startsWith('/regions/')">
          <summary class="nav-sidebar__section-summary">Regions</summary>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/regions/empty-states">Empty states</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/regions/filters">Filters</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/regions/navigation">Navigation</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/regions/search">Search</nuxt-link>
        </details>

        <details class="nav-sidebar__section" :open="$route.fullPath.startsWith('/content/')">
          <summary class="nav-sidebar__section-summary">Content</summary>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/content/voice-tone">Voice &amp; tone</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/content/terminology">Terminology</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/content/punctuation">Punctuation</nuxt-link>
        </details>

        <details class="nav-sidebar__section" :open="$route.fullPath.startsWith('/usability/')">
          <summary class="nav-sidebar__section-summary">Usability</summary>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/usability/a11y">Accessibility</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/usability/i18n">Internationalization</nuxt-link>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/usability/helping-users">Helping users</nuxt-link>
        </details>

        <details class="nav-sidebar__section" :open="$route.fullPath.startsWith('/resources/')">
          <summary class="nav-sidebar__section-summary">Resources</summary>
          <nuxt-link class="nav-sidebar__section-items-anchor" to="/resources/design-resources">Design resources</nuxt-link>
        </details>
      </div>
    </nav>
    <div :class="contentWrapper"> <nuxt /> </div>
  </div>
</template>

<script>
  import gitlabLogo from "@gitlab-org/gitlab-svgs/dist/illustrations/gitlab_logo.svg";

  export default {
    computed: {
      contentWrapper() {
        return this.$route.fullPath === '/' ? '' : 'content';
      }
    },
    data() {
      return {
        gitlabLogo,
      }
    },
  }
</script>

<style lang="scss">
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  @import "../assets/stylesheets/app.scss";
</style>
