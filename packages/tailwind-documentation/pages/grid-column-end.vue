<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_FLEXBOX_AND_GRID } from "../constants";

definePageMeta({
  title: "Grid Column End",
  category: CATEGORY_FLEXBOX_AND_GRID,
  tailwindDocsLink: "/grid-column",
});
</script>
