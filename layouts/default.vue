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
            src="/gitlab_logo.svg"
          />
          GitLab Design System
        </nuxt-link>
      </div>
      <div class="nav-sidebar__body m-t-3 m-b-3">
        <details 
          :open="$route.fullPath.startsWith('/getting-started')" 
          class="nav-sidebar__section"
        >
          <summary class="nav-sidebar__section-summary">Getting started</summary>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/getting-started/structure"
          >Structure</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/getting-started/personas"
          >Personas</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/getting-started/contributing"
          >Contributing</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/getting-started/status"
          >Status</nuxt-link>
        </details>

        <details 
          :open="$route.fullPath.startsWith('/foundations/')" 
          class="nav-sidebar__section"
        >
          <summary class="nav-sidebar__section-summary">Foundations</summary>
          <nuxt-link
            class="nav-sidebar__section-items-anchor"
            to="/foundations/colors"
          >Colors</nuxt-link>
          <nuxt-link
            class="nav-sidebar__section-items-anchor"
            to="/foundations/iconography"
          >Iconography</nuxt-link>
          <nuxt-link
            class="nav-sidebar__section-items-anchor"
            to="/foundations/motion"
          >Motion</nuxt-link>
          <nuxt-link
            class="nav-sidebar__section-items-anchor"
            to="/foundations/illustration"
          >Illustration</nuxt-link>
          <nuxt-link
            class="nav-sidebar__section-items-anchor"
            to="/foundations/typography"
          >Typography</nuxt-link>
          <nuxt-link
            class="nav-sidebar__section-items-anchor"
            to="/foundations/interactions"
          >Interactions</nuxt-link>
          <nuxt-link
            class="nav-sidebar__section-items-anchor"
            to="/foundations/saving-and-feedback"
          >Saving and feedback</nuxt-link>
        </details>

        <details 
          :open="$route.fullPath.startsWith('/layout/')" 
          class="nav-sidebar__section"
        >
          <summary class="nav-sidebar__section-summary">Layout</summary>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/layout/spacing"
          >Spacing</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/layout/grid"
          >Grid</nuxt-link>
        </details>

        <details 
          :open="$route.fullPath.startsWith('/components/')" 
          class="nav-sidebar__section"
        >
          <summary class="nav-sidebar__section-summary">Components</summary>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/alerts"
          >Alerts</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/avatar"
          >Avatar</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/badges"
          >Badges</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/banners"
          >Banners</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/breadcrumbs"
          >Breadcrumbs</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/broadcast-messages"
          >Broadcast messages</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/buttons"
          >Buttons</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/code-snippets"
          >Code snippets</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/data-tables"
          >Data tables</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/data-visualization"
          >Data visualization</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/date-picker"
          >Date picker</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/dropdowns"
          >Dropdowns</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/file-uploader"
          >File uploader</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/filters"
          >Filters</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/forms"
          >Forms</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/labels"
          >Labels</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/lists"
          >Lists</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/modals"
          >Modals</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/notifications"
          >Notifications</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/pagination"
          >Pagination</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/popovers"
          >Popovers</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/progress-bars"
          >Progress bars</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/search"
          >Search</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/segmented-control"
          >Segmented control</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/skeleton-loader"
          >Skeleton loader</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/sorting"
          >Sorting</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/spinner"
          >Spinner</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/tabs"
          >Tabs</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/tags"
          >Tags</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/toasts"
          >Toasts</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/toggles"
          >Toggles</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/components/tooltips"
          >Tooltips</nuxt-link>
        </details>

        <details 
          :open="$route.fullPath.startsWith('/regions/')" 
          class="nav-sidebar__section"
        >
          <summary class="nav-sidebar__section-summary">Regions</summary>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/regions/empty-states"
          >Empty states</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/regions/navigation"
          >Navigation</nuxt-link>
        </details>

        <details 
          :open="$route.fullPath.startsWith('/content/')" 
          class="nav-sidebar__section"
        >
          <summary class="nav-sidebar__section-summary">Content</summary>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/content/voice-tone"
          >Voice &amp; tone</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/content/terminology"
          >Terminology</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/content/punctuation"
          >Punctuation</nuxt-link>
        </details>

        <details 
          :open="$route.fullPath.startsWith('/usability/')" 
          class="nav-sidebar__section"
        >
          <summary class="nav-sidebar__section-summary">Usability</summary>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/usability/a11y"
          >Accessibility</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/usability/i18n"
          >Internationalization</nuxt-link>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/usability/helping-users"
          >Helping users</nuxt-link>
        </details>

        <details 
          :open="$route.fullPath.startsWith('/resources/')" 
          class="nav-sidebar__section"
        >
          <summary class="nav-sidebar__section-summary">Resources</summary>
          <nuxt-link 
            class="nav-sidebar__section-items-anchor" 
            to="/resources/design-resources"
          >Design resources</nuxt-link>
        </details>
      </div>
    </nav>
    <div :class="contentWrapper"> <nuxt /> </div>
  </div>
</template>

<script>
export default {
  computed: {
    contentWrapper() {
      return this.$route.fullPath === '/' ? '' : 'content'
    },
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

@import '../assets/stylesheets/app.scss';
</style>
