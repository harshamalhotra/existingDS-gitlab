<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_BORDERS } from "../constants";

definePageMeta({
  title: "Borders",
  category: CATEGORY_BORDERS,
  tailwindDocsLink: null,
});
</script>
