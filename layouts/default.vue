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
        <template v-if="contentTree">
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
            :open="$route.fullPath.startsWith('/components')" 
            class="nav-sidebar__section"
          >
            <summary class="nav-sidebar__section-summary">
              <nuxt-link 
                to="/components"
              >
                Components
              </nuxt-link>
            </summary>
            <nuxt-link 
              v-for="component in contentTree.components"
              :key="component.id"
              :to="`/components/${component.id}`"
              class="nav-sidebar__section-items-anchor"
            >
              {{ component.name }}
            </nuxt-link>
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
        </template>
        <template v-else>
          Loading ...
        </template>
      </div>
    </nav>
    <div :class="contentWrapper"> <nuxt /> </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentTree: null
    }
  },
  computed: {
    contentWrapper() {
      return this.$route.fullPath === '/' ? '' : 'content'
    }
  },
  created() {
    this.$axios
      .$get(`/contents/contentTree.json`)
      .then(treeResult => {
        this.contentTree = treeResult
      })
      .catch(e => {
        // eslint-disable-next-line
        console.log('Err : ', e)
      })
  }
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
</style>
