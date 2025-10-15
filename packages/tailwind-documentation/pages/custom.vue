<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_LAYOUT } from "../constants";

definePageMeta({
  title: "Custom",
  category: CATEGORY_LAYOUT,
  tailwindDocsLink: "/plugins#adding-utilities",
});
</script>
