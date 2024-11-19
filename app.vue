<template>
  <div class="gl-h-full">
    <NuxtLayout>
      <NuxtPage class="gl-h-full" />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { resolvedUtilities, resolvedVariants } from "virtual:tailwind-utils";

provide("resolvedUtilities", resolvedUtilities);
provide("resolvedVariants", resolvedVariants);

const route = useRoute();

useHead({
  title: () => `GitLab Tailwind CSS Docs - ${route.meta.title}`,
});
</script>
