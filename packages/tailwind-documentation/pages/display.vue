<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_LAYOUT } from "../constants";

definePageMeta({
  title: "Display",
  category: CATEGORY_LAYOUT,
});
</script>
