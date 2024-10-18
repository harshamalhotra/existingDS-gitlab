<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_FLEXBOX_AND_GRID } from "../constants";

definePageMeta({
  title: "Justify Self",
  category: CATEGORY_FLEXBOX_AND_GRID,
});
</script>
