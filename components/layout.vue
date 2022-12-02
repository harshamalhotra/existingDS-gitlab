<script>
import { mapState } from 'vuex';
import Navbar from './navbar.vue';
import Sidebar from './sidebar.vue';

export default {
  components: {
    Navbar,
    Sidebar,
  },
  computed: {
    ...mapState(['sidebarOpen']),
  },
};
</script>

<template>
  <div class="page">
    <a href="#skipTarget" class="skip-link">Skip to main content</a>
    <navbar />
    <sidebar />
    <main class="main" :class="{ 'sidebar--open': sidebarOpen }">
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
        <nuxt-link to="/get-started/contributing">Please contribute</nuxt-link>
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
