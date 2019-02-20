<template>
  <li>
    <details
      :open="$route.fullPath.startsWith(`/${category}`)"
      class="nav-sidebar__section"
    >
      <summary
        class="nav-sidebar__section-summary nav-sidebar--indent-1"
        @click="selectFirstSubItem"
      >{{ categoryName || (category.charAt(0).toUpperCase() + category.slice(1)) }}</summary>
      <slot></slot>
      <nav-sidebar-menu-item
        v-for="page in contentTree[category]"
        :key="page.id"
        :name="page.name"
        :to="`/${category}/${page.id}`"
      />
    </details>
  </li>
</template>

<script>
import NavSidebarMenuItem from './nav_sidebar_menu_item.vue';

export default {
  components: {
    NavSidebarMenuItem,
  },
  props: {
    contentTree: {
      type: Object,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    categoryName: {
      type: String,
      required: false,
      default: '',
    },
  },
  methods: {
    selectFirstSubItem(ev) {
      const { target } = ev;
      if (target && target.parentNode) {
        const detailsLinks = target.parentNode.querySelectorAll('a');
        if (detailsLinks.length > 0) {
          const firstLink = detailsLinks[0].getAttribute('href');
          if (firstLink) {
            const that = this;
            setTimeout(() => {
              that.$router.push({
                path: firstLink.replace(/#/, ''),
              });
            }, 1);
          }
        }
      }
    },
  },
};
</script>
