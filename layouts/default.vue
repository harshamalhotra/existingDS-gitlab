<template>
  <div class="page">
    <nav class="nav-sidebar">
      <div class="nav-sidebar__header">
        <nuxt-link
          to="/"
          class="nav-sidebar__header-anchor p-a-5"
        >
          <svg 
                  width="24" 
                  height="24" 
                  class="tanuki-logo m-r-2" 
                  viewBox="0 0 36 36"
                >
                  <path
                    class="tanuki-shape tanuki-left-ear"
                    fill="#e24329"
                    d="M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z"
                  />
                  <path
                    class="tanuki-shape tanuki-right-ear"
                    fill="#e24329"
                    d="M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z"
                  />
                  <path
                    class="tanuki-shape tanuki-nose"
                    fill="#e24329"
                    d="M18,34.38 3,14 33,14 Z"
                  />
                  <path
                    class="tanuki-shape tanuki-left-eye"
                    fill="#fc6d26"
                    d="M18,34.38 11.38,14 2,14 6,25Z"
                  />
                  <path
                    class="tanuki-shape tanuki-right-eye"
                    fill="#fc6d26"
                    d="M18,34.38 24.62,14 34,14 30,25Z"
                  />
                  <path
                    class="tanuki-shape tanuki-left-cheek"
                    fill="#fca326"
                    d="M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z"
                  />
                  <path
                    class="tanuki-shape tanuki-right-cheek"
                    fill="#fca326"
                    d="M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z"
                  />
                </svg>

          GitLab Design System
        </nuxt-link>
      </div>
      <div class="nav-sidebar__body m-b-3">
        <template v-if="contentTree">
          <ul 
            :open="$route.fullPath.startsWith('/brand/')" 
            class="nav-sidebar__section"
          >
            <li>
              <span class="nav-sidebar__section-title">Brand</span>
                <details 
                  :open="$route.fullPath.startsWith('/brand/')" 
                  class="nav-sidebar__section"
                >
                  <summary class="nav-sidebar__section-summary nav-sidebar--indent-1">Get started</summary>
                  <nuxt-link 
                    class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                    to="/brand/brand-personality"
                  >Brand personality</nuxt-link>
                  <nuxt-link 
                    class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                    to="/brand/tone-of-voice"
                  >Tone of voice</nuxt-link>
                </details>
            </li>
            <li>
                <details 
                :open="$route.fullPath.startsWith('/brand/foundations')" 
                class="nav-sidebar__section"
                >
                  <summary class="nav-sidebar__section-summary nav-sidebar--indent-1">Foundations</summary>
                  <nuxt-link 
                    class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                    to="/brand/foundations/gitlab-logo"
                  >The GitLab logo</nuxt-link>
                  <nuxt-link 
                    class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                    to="/brand/foundations/colors"
                  >Colors</nuxt-link>
                  <nuxt-link
                    class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                    to="/brand/foundations/typography"
                  >Typography</nuxt-link>
                  <nuxt-link 
                    class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                    to="/brand/foundations/buttons"
                  >Buttons</nuxt-link>
                  <nuxt-link 
                    class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                    to="/brand/foundations/iconography"
                  >Iconography</nuxt-link>
                </details>
            </li>
            <nuxt-link 
              tag="li"
              class="nav-sidebar__section-items-anchor nav-sidebar--indent-1" 
              to="/brand/content"
            >Content</nuxt-link>
            <nuxt-link 
              tag="li"
              class="nav-sidebar__section-items-anchor nav-sidebar--indent-1" 
              to="/brand/resources"
            >Resources</nuxt-link>
          </ul>
          <ul 
            :open="$route.fullPath.startsWith('/product/')" 
            class="nav-sidebar__section"
          >
            <li>
              <span class="nav-sidebar__section-title">Product</span>
              <details 
                :open="$route.fullPath.startsWith('/getting-started/')" 
                class="nav-sidebar__section"
              >
                <summary class="nav-sidebar__section-summary nav-sidebar--indent-1">Get started</summary>
                <nuxt-link 
                class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                to="/getting-started/structure"
              >Structure</nuxt-link>
              <nuxt-link 
                class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                to="/getting-started/personas"
              >Personas</nuxt-link>
              <nuxt-link 
                class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                to="/getting-started/contributing"
              >Contributing</nuxt-link>
              <nuxt-link 
                class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                to="/getting-started/status"
              >Status</nuxt-link>
              </details>
            </li>
            <li>
              <details 
              :open="$route.fullPath.startsWith('/foundations/')" 
              class="nav-sidebar__section"
              >
                <summary class="nav-sidebar__section-summary nav-sidebar--indent-1">Foundations</summary>
                <nuxt-link
                  class="nav-sidebar__section-items-anchor nav-sidebar--indent-2"
                  to="/foundations/colors"
                >Colors</nuxt-link>
                <nuxt-link
                  class="nav-sidebar__section-items-anchor nav-sidebar--indent-2"
                  to="/foundations/iconography"
                >Iconography</nuxt-link>
                <nuxt-link
                  class="nav-sidebar__section-items-anchor nav-sidebar--indent-2"
                  to="/foundations/motion"
                >Motion</nuxt-link>
                <nuxt-link
                  class="nav-sidebar__section-items-anchor nav-sidebar--indent-2"
                  to="/foundations/illustration"
                >Illustration</nuxt-link>
                <nuxt-link
                  class="nav-sidebar__section-items-anchor nav-sidebar--indent-2"
                  to="/foundations/typography"
                >Typography</nuxt-link>
                <nuxt-link
                  class="nav-sidebar__section-items-anchor nav-sidebar--indent-2"
                  to="/foundations/interactions"
                >Interactions</nuxt-link>
                <nuxt-link
                  class="nav-sidebar__section-items-anchor nav-sidebar--indent-2"
                  to="/foundations/saving-and-feedback"
                >Saving and feedback</nuxt-link>
              </details>
            </li>
            <li>
              <details 
                :open="$route.fullPath.startsWith('/layout/')" 
                class="nav-sidebar__section"
              >
                <summary class="nav-sidebar__section-summary nav-sidebar--indent-1">Layout</summary>
                <nuxt-link 
                  class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                  to="/layout/spacing"
                >Spacing</nuxt-link>
                <nuxt-link 
                  class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                  to="/layout/grid"
                >Grid</nuxt-link>
              </details>
            </li>
            <li>
              <details 
                :open="$route.fullPath.startsWith('/components')" 
                class="nav-sidebar__section"
              >
                <summary class="nav-sidebar__section-summary nav-sidebar--indent-1">Components</summary>
                <nuxt-link 
                  v-for="component in contentTree.components"
                  :key="component.id"
                  :to="`/components/${component.id}`"
                  class="nav-sidebar__section-items-anchor nav-sidebar--indent-2"
                >
                  {{ component.name }}
                </nuxt-link>
              </details>
            </li>
            <li>
              <details 
              :open="$route.fullPath.startsWith('/regions/')" 
              class="nav-sidebar__section"
              >
                <summary class="nav-sidebar__section-summary nav-sidebar--indent-1">Regions</summary>
                <nuxt-link 
                  class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                  to="/regions/empty-states"
                >Empty states</nuxt-link>
                <nuxt-link 
                  class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                  to="/regions/navigation"
                >Navigation</nuxt-link>
              </details>
            </li>
            <li>
              <details 
                :open="$route.fullPath.startsWith('/content/')" 
                class="nav-sidebar__section"
              >
                <summary class="nav-sidebar__section-summary nav-sidebar--indent-1">Content</summary>
                <nuxt-link 
                  class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                  to="/content/voice-tone"
                >Voice &amp; tone</nuxt-link>
                <nuxt-link 
                  class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                  to="/content/terminology"
                >Terminology</nuxt-link>
                <nuxt-link 
                  class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                  to="/content/punctuation"
                >Punctuation</nuxt-link>
              </details>
            </li>
            <li>
              <details 
                :open="$route.fullPath.startsWith('/usability/')" 
                class="nav-sidebar__section"
              >
                <summary class="nav-sidebar__section-summary nav-sidebar--indent-1">Usability</summary>
                <nuxt-link 
                  class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                  to="/usability/i18n"
                >Internationalization</nuxt-link>
                <nuxt-link 
                  class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                  to="/usability/helping-users"
                >Helping users</nuxt-link>
              </details>
            </li>
            <li>
              <details 
              :open="$route.fullPath.startsWith('/resources/')" 
              class="nav-sidebar__section"
            >
              <summary class="nav-sidebar__section-summary nav-sidebar--indent-1">Resources</summary>
              <nuxt-link 
                class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                to="/resources/design-resources"
              >Design resources</nuxt-link>
            </details>
            </li>
          </ul>
          <ul
            :open="$route.fullPath.startsWith('/research/')" 
            class="nav-sidebar__section"
          >
            <span class="nav-sidebar__section-title">Research</span>
            <nuxt-link 
              tag="li"
              class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
              to="/research/get-started"
            >Get started</nuxt-link>
            <nuxt-link 
              tag="li"
              class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
              to="/research/toolkit"
            >Toolkit</nuxt-link>
            <nuxt-link 
              tag="li"
              class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
              to="/research/first-look"
            >First look</nuxt-link>
          </ul>
          <ul 
            :open="$route.fullPath.startsWith('/accessibility/')" 
            class="nav-sidebar__section"
          >
            <span class="nav-sidebar__section-title">Accessibility</span>
            <nuxt-link 
              tag="li"
              class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
              to="/accessibility/a11y"
            >Statement of compliance</nuxt-link>
            <nuxt-link 
              tag="li"
              class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
              to="/accessibility/best-practices"
            >Best practices</nuxt-link>
          </ul>
          <ul 
            :open="$route.fullPath.startsWith('/contribute/')" 
            class="nav-sidebar__section"
          >
            <span class="nav-sidebar__section-title">Contribute</span>
            <nuxt-link 
              tag="li"
              class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
              to="/contribute/get-started"
            >Get started</nuxt-link>
            <nuxt-link 
              tag="li"
              class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
              to="/contribute/resources"
            >Resources</nuxt-link>
          </ul>
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
