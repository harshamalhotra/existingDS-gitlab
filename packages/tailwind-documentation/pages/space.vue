<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_SPACING } from "../constants";

definePageMeta({
  title: "Space Between",
  category: CATEGORY_SPACING,
});
</script>
