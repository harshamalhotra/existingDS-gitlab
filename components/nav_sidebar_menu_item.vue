<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <li>
    <nuxt-link
      :to="to"
      class="nav-sidebar__section-items-anchor nav-sidebar--indent-2"
    >
      {{ name }}
    </nuxt-link>
  </li>
</template>
