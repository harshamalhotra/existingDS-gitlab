<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_SIZING } from "../constants";

definePageMeta({
  title: "Min-height",
  category: CATEGORY_SIZING,
});
</script>
