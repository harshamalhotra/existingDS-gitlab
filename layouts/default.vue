<script>
import { mapState, mapMutations } from 'vuex';
import MenuItem from '../components/menu_item.vue';
import Search from '../components/search/search.vue';
import nav from '../nav.json';

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
  nav,
  gitlabOrgBaseUrl: 'https://gitlab.com/groups/gitlab-org/-/',
  components: {
    MenuItem,
    Search,
  },
  data() {
    return {
      open: false,
    };
  },
  computed: {
    ...mapState(['frontmatter']),
    lastUpdatedAt() {
      const { lastUpdatedAt } = this.frontmatter;
      if (!lastUpdatedAt) {
        return null;
      }
      return new Date(lastUpdatedAt).toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });
    },
    contentWrapper() {
      return this.$route.fullPath === '/' ? '' : 'content main';
    },
    componentLabel() {
      const { section, slug } = this.$route.params;
      if (section !== 'components') {
        return null;
      }
      return componentNameToLabelMap[slug] || slug;
    },
  },
  mounted() {
    /**
     * bootstrap-vue renders components outside of the usual DOM, in the body
     * In order to apply our component-only styles, we are adding app-styles
     * to the wrapper element
     */
    this.$root.$on('bv::modal::show', (bvEvent, modalId) => {
      setTimeout(() => {
        document.getElementById(modalId).parentElement.classList.add('app-styles');
      }, 0);
    });
  },
  created() {
    this.setActiveNavItem(this.$route.fullPath);
  },
  methods: {
    ...mapMutations(['setActiveNavItem']),
  },
};
</script>

<template>
  <div class="page">
    <div v-if="open" class="nav-sidebar__overlay" @click="open = false"></div>
    <button type="button" class="nav-sidebar__toggle" :aria-expanded="open" @click="open = !open">
      <svg
        width="32"
        height="32"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title>Toggle menu</title>
        <path
          d="M2 3h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"
        />
      </svg>
    </button>
    <nav :class="{ 'nav-sidebar--open': open }" class="nav-sidebar">
      <div class="nav-sidebar__header">
        <nuxt-link to="/" class="nav-sidebar__header-anchor p-a-5">
          <svg
            height="36"
            viewBox="0 0 376 342"
            xmlns="http://www.w3.org/2000/svg"
            class="tanuki-logo"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                d="M185.398 341.13l68.013-209.322H117.39L185.4 341.13z"
                fill="#E24329"
                class="tanuki-shape tanuki-left-ear"
              />
              <path
                d="M185.398 341.13l-68.013-209.322h-95.32L185.4 341.128z"
                fill="#FC6D26"
                class="tanuki-shape tanuki-left-eye"
              />
              <path
                d="M22.066 131.808l-20.67 63.61c-1.884 5.803.18 12.16 5.117 15.744L185.398 341.13 22.066 131.807z"
                fill="#FCA326"
                class="tanuki-shape tanuki-left-cheek"
              />
              <path
                d="M22.066 131.808h95.32L76.42 5.735c-2.107-6.487-11.284-6.487-13.39 0L22.065 131.808z"
                fill="#E24329"
                class="tanuki-shape tanuki-nose"
              />
              <path
                d="M185.398 341.13l68.013-209.322h95.32L185.4 341.128z"
                fill="#FC6D26"
                class="tanuki-shape tanuki-right-eye"
              />
              <path
                d="M348.73 131.808l20.67 63.61c1.884 5.803-.18 12.16-5.117 15.744L185.398 341.13 348.73 131.807z"
                fill="#FCA326"
                class="tanuki-shape tanuki-right-cheek"
              />
              <path
                d="M348.73 131.808h-95.32L294.376 5.735c2.108-6.487 11.285-6.487 13.392 0l40.963 126.073z"
                fill="#E24329"
                class="tanuki-shape tanuki-right-ear"
              />
            </g>
          </svg>
          <span class="m-l-4">GitLab Design System</span>
        </nuxt-link>
      </div>
      <client-only>
        <search />
        <template #placeholder>
          <div class="gl-py-6"></div>
        </template>
      </client-only>
      <div class="nav-sidebar__body m-b-3">
        <menu-item v-for="item in $options.nav" :key="item.title" :item="item" />
      </div>
    </nav>
    <div :class="contentWrapper">
      <nuxt />
      <footer class="content footer limited m-b-7">
        <div class="row justify-content-center">
          <edit-this-page-link
            edit-url="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/main/"
          >
            Edit this page
          </edit-this-page-link>
          <span class="footer-link-divider"></span>
          <edit-this-page-link
            edit-url="https://gitlab.com/-/ide/project/gitlab-org/gitlab-services/design.gitlab.com/edit/main/-"
          >
            Open Web IDE
          </edit-this-page-link>
          <span class="footer-link-divider"></span>
          <template v-if="componentLabel">
            <a
              :href="`${$options.gitlabOrgBaseUrl}issues?label_name%5B%5D=component%3A${componentLabel}`"
            >
              Related issues
            </a>
            <span class="footer-link-divider"></span>
            <a
              :href="`${$options.gitlabOrgBaseUrl}merge_requests?label_name%5B%5D=component%3A${componentLabel}`"
            >
              Related merge requests
            </a>
            <span class="footer-link-divider"></span>
          </template>
          <nuxt-link to="/contribute/get-started">Please contribute</nuxt-link>
        </div>
        <p v-if="lastUpdatedAt" class="row justify-content-center m-t-5 p-b-5">
          Last updated at:&nbsp;<time :datetime="frontmatter.lastUpdatedAt">{{
            lastUpdatedAt
          }}</time>
        </p>
      </footer>
    </div>
  </div>
</template>

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
