<script>
import { mapState, mapActions } from 'vuex';
import { GlColorModeToggle } from '../helpers/gitlab_ui';

export default {
  name: 'DarkModeToggle',
  components: {
    GlColorModeToggle,
  },
  computed: {
    ...mapState('mode', ['isDarkMode']),
  },
  methods: {
    ...mapActions('mode', ['toggleDarkMode']),
  },
};
</script>

<template>
  <gl-color-mode-toggle :is-dark-mode="isDarkMode" @toggle="toggleDarkMode" />
</template>
