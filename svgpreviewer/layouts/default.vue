<script>
import MenuBar from '../components/menu_bar.vue';

export default {
  name: 'DefaultLayout',
  components: {
    MenuBar,
  },
};
</script>

<template>
  <div>
    <menu-bar />
    <nuxt />
  </div>
</template>
