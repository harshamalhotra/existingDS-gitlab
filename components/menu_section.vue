<template>
  <ul class="nav-sidebar__section">
    <span class="nav-sidebar__section-title">{{ categoryName || (category.charAt(0).toUpperCase() + category.slice(1)) }}</span>
    <nav-sidebar-menu-item
      v-for="page in contentTree[category]"
      :key="page.id"
      :name="page.name"
      :to="`/${category}/${page.id}`"
    />
  </ul>
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
};
</script>
