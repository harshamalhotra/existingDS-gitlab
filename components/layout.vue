<script>
import { mapState, mapMutations } from 'vuex';
import Navbar from './navbar.vue';

export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapState(['sidebarOpen']),
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
      <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <title>Toggle menu</title>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 3.75C0 3.33579 0.335786 3 0.75 3H15.25C15.6642 3 16 3.33579 16 3.75C16 4.16421 15.6642 4.5 15.25 4.5H0.75C0.335786 4.5 0 4.16421 0 3.75ZM0 8C0 7.58579 0.335786 7.25 0.75 7.25H15.25C15.6642 7.25 16 7.58579 16 8C16 8.41421 15.6642 8.75 15.25 8.75H0.75C0.335786 8.75 0 8.41421 0 8ZM0.75 11.5C0.335786 11.5 0 11.8358 0 12.25C0 12.6642 0.335786 13 0.75 13H15.25C15.6642 13 16 12.6642 16 12.25C16 11.8358 15.6642 11.5 15.25 11.5H0.75Z"
        />
      </svg>
    </button>
    <navbar />

    <main class="main">
      <nuxt />
    </main>
    <footer class="footer container gl-pb-7">
      <div class="row gl-justify-content-center">
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
    </footer>
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
