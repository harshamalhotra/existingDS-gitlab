<script>
import { mapState, mapMutations } from 'vuex';
import Logo from './logo.vue';

export default {
  components: {
    Logo,
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
  <header class="navbar">
    <logo />
    <button
      aria-label="Toggle menu"
      type="button"
      class="navbar__toggle"
      :aria-expanded="sidebarOpen"
      @click="toggleSidebar"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
          v-if="sidebarOpen"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22Z"
        />
        <path
          v-else
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 3.75A.75.75 0 0 1 .75 3h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 3.75ZM0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8Zm.75 3.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H.75Z"
        />
      </svg>
    </button>
  </header>
</template>
