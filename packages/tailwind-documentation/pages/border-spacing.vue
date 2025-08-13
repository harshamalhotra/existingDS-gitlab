<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_TABLES } from "../constants";

definePageMeta({
  title: "Border Spacing",
  category: CATEGORY_TABLES,
});
</script>
