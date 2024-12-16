<script>
import { mapState, mapMutations } from 'vuex';
import { GlButton } from '../helpers/gitlab_ui';

export default {
  name: 'DarkModeToggle',
  components: {
    GlButton,
  },
  computed: {
    ...mapState(['sidebarOpen']),
  },
  methods: {
    ...mapMutations(['toggleSidebar']),
  },
};
</script>

<template>
  <gl-button
    aria-label="Toggle menu"
    :aria-expanded="sidebarOpen"
    :icon="sidebarOpen ? 'close' : 'hamburger'"
    category="tertiary"
    @click="toggleSidebar"
  />
</template>
