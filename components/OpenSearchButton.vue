<template>
  <button
    class="gl-group gl-flex gl-items-center gl-gap-x-2"
    @click="emit('openSearch')"
  >
    <span>Search</span>
    <span
      class="gl-border gl-inline-block gl-rounded-base gl-px-3 gl-py-1 gl-transition-all group-hover:gl-border-purple-300 group-hover:gl-text-purple-500"
      ><kbd>⌘</kbd> <kbd>K</kbd></span
    >
  </button>
</template>

<script setup>
const emit = defineEmits(["openSearch"]);
</script>
