<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_ACCESSIBILITY } from "../constants";

definePageMeta({
  title: "Forced Color Adjust",
  category: CATEGORY_ACCESSIBILITY,
});
</script>
