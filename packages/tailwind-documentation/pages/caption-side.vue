<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_TABLES } from "../constants";

definePageMeta({
  title: "Caption Side",
  category: CATEGORY_TABLES,
});
</script>
