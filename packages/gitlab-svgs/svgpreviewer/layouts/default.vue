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
    <div class="gl-m-auto gl-max-w-7xl gl-px-5 gl-py-7">
      <nuxt />
    </div>
  </div>
</template>
