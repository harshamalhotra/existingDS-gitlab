<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_FILTERS } from "../constants";

definePageMeta({
  title: "Grayscale",
  category: CATEGORY_FILTERS,
});
</script>
