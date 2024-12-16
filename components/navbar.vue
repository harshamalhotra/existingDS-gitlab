<script>
import DarkModeToggle from './dark_mode_toggle.vue';
import Logo from './logo.vue';
import MenuToggle from './menu_toggle.vue';

export default {
  components: {
    DarkModeToggle,
    Logo,
    MenuToggle,
  },
};
</script>

<template>
  <header class="gl-flex gl-items-center gl-justify-between gl-gap-2 gl-p-3">
    <logo />
    <div class="app-styles gl-flex">
      <dark-mode-toggle />
      <menu-toggle class="md:!gl-hidden" />
    </div>
  </header>
</template>
