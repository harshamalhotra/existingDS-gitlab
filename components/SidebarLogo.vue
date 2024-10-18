<template>
  <RouterLink
    to="/aspect-ratio"
    class="gl-h-16 gl-flex gl-shrink-0 gl-items-center gl-gap-x-2 gl-px-5 gl-pt-5"
  >
    <GitLabLogo class="gl-w-8" />
    <TailwindLogo class="gl-w-10" />
  </RouterLink>
</template>

<script setup>
import TailwindLogo from "~/assets/svg/tailwind-logo.svg";
import GitLabLogo from "~/assets/svg/gitlab-logo.svg";
</script>
