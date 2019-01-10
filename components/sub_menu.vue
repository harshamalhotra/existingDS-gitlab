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
      <nuxt-link
        v-for="page in contentTree[category]"
        :key="page.id"
        :to="`/${category}/${page.id}`"
        class="nav-sidebar__section-items-anchor nav-sidebar--indent-2"
      >
        {{ page.name }}
      </nuxt-link>
    </details>
  </li>
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
