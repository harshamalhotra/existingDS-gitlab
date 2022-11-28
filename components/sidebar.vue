<script>
import { mapState } from 'vuex';
import { NavTree } from '../helpers/navigation/nav_tree';
import nav from '../nav.json';
import Logo from './logo.vue';
import MenuItem from './menu_item.vue';
import Search from './search/search_box.vue';

export default {
  components: {
    Logo,
    MenuItem,
    Search,
  },
  data() {
    return {
      navTree: new NavTree(nav),
    };
  },
  computed: {
    ...mapState(['sidebarOpen']),
  },
  mounted() {
    this.$router.afterEach(() => {
      this.$nextTick(this.updateActiveNavItem);
    });
    this.updateActiveNavItem();
  },
  methods: {
    updateActiveNavItem() {
      const [activeLink] = [...this.$el.querySelectorAll('.nuxt-link-active')].reverse();
      if (activeLink) {
        this.navTree.activateNodeWithRoute(activeLink.getAttribute('href'));
      }
    },
  },
};
</script>

<template>
  <aside :class="{ 'sidebar--open': sidebarOpen }" class="sidebar">
    <div class="sidebar__header">
      <logo />
    </div>
    <div class="gl-pb-3 gl-px-4">
      <client-only>
        <search />
        <template #placeholder>
          <div class="gl-py-6"></div>
        </template>
      </client-only>
    </div>
    <div class="gl-flex-grow-1 gl-overflow-auto gl-p-3">
      <nav class="sidebar__nav" aria-labelledby="nav-heading">
        <h2 id="nav-heading" class="gl-sr-only">Main navigation</h2>
        <ul>
          <menu-item
            v-for="item in navTree.topLevelNodes"
            :key="item.id"
            :item="item"
            :nav-tree="navTree"
          />
        </ul>
      </nav>
    </div>
  </aside>
</template>
