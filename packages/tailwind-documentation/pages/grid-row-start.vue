<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_FLEXBOX_AND_GRID } from "../constants";

definePageMeta({
  title: "Grid Row Start",
  category: CATEGORY_FLEXBOX_AND_GRID,
  tailwindDocsLink: "/grid-row",
});
</script>
