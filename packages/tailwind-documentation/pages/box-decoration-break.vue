<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_LAYOUT } from "../constants";

definePageMeta({
  title: "Box Decoration Break",
  category: CATEGORY_LAYOUT,
});
</script>
