<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_SPACING } from "../constants";

definePageMeta({
  title: "Padding",
  category: CATEGORY_SPACING,
});
</script>
