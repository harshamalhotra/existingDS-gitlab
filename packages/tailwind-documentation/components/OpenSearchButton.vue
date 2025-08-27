<template>
  <button
    class="gl-group gl-flex gl-items-center gl-gap-2"
    @click="emit('openSearch')"
  >
    <span class="gl-text-sm gl-font-semibold">Search</span>
    <span
      class="gl-border gl-inline-block gl-rounded-base gl-px-2 gl-py-1 gl-transition-all group-hover:gl-border-strong"
      ><kbd>{{ modifierKey }}</kbd> <kbd>K</kbd></span
    >
  </button>
</template>

<script setup>
import { isMac } from "./utils/environment";

const emit = defineEmits(["openSearch"]);

const modifierKey = ref(isMac() ? "⌘" : "Ctrl");
</script>
