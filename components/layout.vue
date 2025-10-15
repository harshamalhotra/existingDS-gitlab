<script>
import { mapState } from 'vuex';
import Navbar from './navbar.vue';
import Sidebar from './sidebar.vue';
import FooterNav from './footer_nav.vue';

export default {
  components: {
    Navbar,
    Sidebar,
    FooterNav,
  },
  props: {
    noFooter: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    ...mapState(['sidebarOpen']),
  },
};
</script>

<template>
  <div class="page">
    <a href="#skipTarget" class="skip-link">Skip to main content</a>
    <navbar
      class="gl-border-b gl-fixed gl-left-0 gl-right-0 gl-top-0 gl-z-200 gl-bg-subtle gl-shadow-sm md:gl-hidden"
    />
    <sidebar />
    <main class="main" :class="{ 'sidebar--open': sidebarOpen }">
      <nuxt />
    </main>
    <footer-nav v-if="!noFooter" />
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
