<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_LAYOUT } from "../constants";

definePageMeta({
  title: "Top / Right / Bottom / Left",
  category: CATEGORY_LAYOUT,
  tailwindDocsLink: "/top-right-bottom-left",
});
</script>
