<template>
  <div class="page">
    <nav class="nav-sidebar">
      <div class="nav-sidebar__header">
        <nuxt-link
          to="/"
          class="nav-sidebar__header-anchor p-a-5"
        >
          <svg height="36" viewBox="0 0 376 342" xmlns="http://www.w3.org/2000/svg" class="tanuki-logo">
            <g fill="none" fill-rule="evenodd">
              <path d="M185.398 341.13l68.013-209.322H117.39L185.4 341.13z" fill="#E24329" class="tanuki-shape tanuki-left-ear"/>
              <path d="M185.398 341.13l-68.013-209.322h-95.32L185.4 341.128z" fill="#FC6D26" class="tanuki-shape tanuki-left-eye"/>
              <path d="M22.066 131.808l-20.67 63.61c-1.884 5.803.18 12.16 5.117 15.744L185.398 341.13 22.066 131.807z" fill="#FCA326" class="tanuki-shape tanuki-left-cheek"/>
              <path d="M22.066 131.808h95.32L76.42 5.735c-2.107-6.487-11.284-6.487-13.39 0L22.065 131.808z" fill="#E24329" class="tanuki-shape tanuki-nose"/>
              <path d="M185.398 341.13l68.013-209.322h95.32L185.4 341.128z" fill="#FC6D26" class="tanuki-shape tanuki-right-eye"/>
              <path d="M348.73 131.808l20.67 63.61c1.884 5.803-.18 12.16-5.117 15.744L185.398 341.13 348.73 131.807z" fill="#FCA326" class="tanuki-shape tanuki-right-cheek"/>
              <path d="M348.73 131.808h-95.32L294.376 5.735c2.108-6.487 11.285-6.487 13.392 0l40.963 126.073z" fill="#E24329" class="tanuki-shape tanuki-right-ear"/>
            </g>
          </svg>
          <span class="m-l-4">GitLab Design System</span>
        </nuxt-link>
      </div>
      <div class="nav-sidebar__body m-b-3">
        <template v-if="contentTree">
          <ul 
            :open="$route.fullPath.startsWith('/brand-get-started/')" 
            class="nav-sidebar__section"
          >
            <li>
              <span class="nav-sidebar__section-title">Brand</span>
            </li>
            <sub-menu :content-tree="contentTree" category="brand-get-started" category-name="Get started" />
            <sub-menu :content-tree="contentTree" category="brand-foundations" category-name="Foundations" />
            <sub-menu :content-tree="contentTree" category="brand-content" category-name="Content" />
            <nuxt-link 
              tag="li"
              class="nav-sidebar__section-items-anchor nav-sidebar--indent-1" 
              to="/brand-resources/resources"
            >Resources</nuxt-link>
          </ul>
          <ul 
            :open="$route.fullPath.startsWith('/product/')" 
            class="nav-sidebar__section"
          >
            <li>
              <span class="nav-sidebar__section-title">Product</span>
            </li>
            <sub-menu :content-tree="contentTree" category="get-started" category-name="Get started" />
            <sub-menu :content-tree="contentTree" category="foundations">
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
            </sub-menu>
            <sub-menu :content-tree="contentTree" category="layout" />
            <sub-menu :content-tree="contentTree" category="components">
              <nuxt-link 
                  class="nav-sidebar__section-items-anchor nav-sidebar--indent-2" 
                  to="/components/status"
                >Status</nuxt-link>
            </sub-menu>
            <sub-menu :content-tree="contentTree" category="regions" />
            <sub-menu :content-tree="contentTree" category="content" />
            <sub-menu :content-tree="contentTree" category="usability" />
            <nuxt-link 
              class="nav-sidebar__section-items-anchor nav-sidebar--indent-1" 
              to="/resources/design-resources"
            >Design resources</nuxt-link>
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
              to="/research/personas"
            >Personas</nuxt-link>
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
          <menu-section :content-tree="contentTree" category="accessibility" />
          <menu-section :content-tree="contentTree" category="contribute" />
        </template>
        <template v-else>
          Loading ...
        </template>
      </div>
    </nav>
    <div :class="contentWrapper">
      <nuxt />
      <footer class="content footer limited m-b-7">
        Edit <edit-this-page-link>this page</edit-this-page-link> &mdash;
        Open
        <edit-this-page-link
          edit-url="https://gitlab.com/-/ide/project/gitlab-org/design.gitlab.com/edit/master/-"
        >
          Web IDE
        </edit-this-page-link> &mdash;
        Please <nuxt-link to="/contribute/get-started">contribute</nuxt-link>
      </footer>
    </div>

  </div>
</template>

<script>
import subMenu from '../components/sub_menu.vue';
import menuSection from '../components/menu_section.vue';

export default {
  components: {
    subMenu,
    menuSection,
  },
  data() {
    return {
      contentTree: null,
    };
  },
  computed: {
    contentWrapper() {
      return this.$route.fullPath === '/' ? '' : 'content';
    },
  },
  created() {
    this.$axios
      .$get(`/contents/contentTree.json`)
      .then(treeResult => {
        this.contentTree = treeResult;
      })
      .catch(e => {
        // eslint-disable-next-line
        console.log('Err : ', e);
      });
  },
};
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
