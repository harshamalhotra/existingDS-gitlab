<script>
import { mapState, mapMutations } from 'vuex';
import Navbar from '../components/navbar.vue';

export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapState(['frontmatter', 'sidebarOpen']),
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
  methods: {
    ...mapMutations(['toggleSidebar', 'closeSidebar']),
  },
};
</script>

<template>
  <div class="page">
    <a href="#skipTarget" class="skip-link">Skip to main content</a>
    <div v-if="sidebarOpen" class="nav-sidebar__overlay" @click="closeSidebar"></div>
    <button
      type="button"
      class="nav-sidebar__toggle"
      :aria-expanded="sidebarOpen"
      @click="toggleSidebar"
    >
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
    <navbar />

    <main :class="contentWrapper">
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
          <nuxt-link to="/get-started/contribute">Please contribute</nuxt-link>
          <span class="footer-link-divider"></span>
          <a href="https://about.gitlab.com/privacy/">Privacy policy</a>
          <span class="footer-link-divider"></span>
          <button id="ot-sdk-btn" class="ot-sdk-show-settings">Cookie Settings</button>
        </div>
        <p v-if="lastUpdatedAt" class="row justify-content-center m-t-5 p-b-5">
          Last updated at:&nbsp;<time :datetime="frontmatter.lastUpdatedAt">{{
            lastUpdatedAt
          }}</time>
        </p>
      </footer>
    </main>
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
