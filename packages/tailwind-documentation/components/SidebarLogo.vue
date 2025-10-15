<template>
  <div
    class="gl-sticky gl-top-0 gl-z-1 gl-flex gl-items-center gl-justify-between gl-bg-subtle gl-p-3"
  >
    <RouterLink
      to="/aspect-ratio"
      class="gl-h-16 gl-flex gl-shrink-0 gl-items-center gl-gap-x-2"
    >
      <GitLabLogo class="gl-w-6" />
    </RouterLink>
    <OpenSearchButton
      v-if="props.showSearchButton"
      @openSearch="emit('openSearch')"
    />
  </div>
</template>

<script setup>
import GitLabLogo from "~/assets/svg/gitlab-logo.svg";

const emit = defineEmits(["openSearch"]);
const props = defineProps({
  showSearchButton: {
    type: Boolean,
    required: true,
  },
});
</script>
