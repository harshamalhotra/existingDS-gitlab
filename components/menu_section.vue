<template>
  <ul class="nav-sidebar__section">
    <span class="nav-sidebar__section-title">{{ categoryName || (category.charAt(0).toUpperCase() + category.slice(1)) }}</span>
    <li v-for="page in contentTree[category]" :key="page.id">
      <nuxt-link
        :to="`/${category}/${page.id}`"
        class="nav-sidebar__section-items-anchor nav-sidebar--indent-1"
      >
        {{ page.name }}
      </nuxt-link>
    </li>
    <slot></slot>
  </ul>
</template>

<script>
export default {
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
