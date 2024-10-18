<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_SPACING } from "../constants";

definePageMeta({
  title: "Margin",
  category: CATEGORY_SPACING,
});
</script>
