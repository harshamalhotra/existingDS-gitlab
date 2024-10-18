<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import allUtilities from "virtual:tailwind-utils";

provide("allUtilities", allUtilities);

const route = useRoute();

useHead({
  title: () => `GitLab Tailwind CSS Docs - ${route.meta.title}`,
});
</script>
