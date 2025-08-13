<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_TABLES } from "../constants";

definePageMeta({
  title: "Table Layout",
  category: CATEGORY_TABLES,
});
</script>
