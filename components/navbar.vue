<script>
import { mapState } from 'vuex';
import { NavTree } from '../helpers/navigation/NavTree';
import nav from '../nav.json';
import MenuItem from './menu_item.vue';
import Search from './search/search.vue';

export default {
  components: {
    MenuItem,
    Search,
  },
  data() {
    return {
      navTree: new NavTree(nav, this.$route.fullPath),
    };
  },
  computed: {
    ...mapState(['sidebarOpen']),
  },
};
</script>

<template>
  <nav :class="{ 'nav-sidebar--open': sidebarOpen }" class="nav-sidebar">
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
      <menu-item
        v-for="item in navTree.topLevelNodes"
        :key="item.id"
        :item="item"
        :nav-tree="navTree"
      />
    </div>
  </nav>
</template>
