<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_ACCESSIBILITY } from "../constants";

definePageMeta({
  title: "Screen Readers",
  category: CATEGORY_ACCESSIBILITY,
  tailwindDocsLink: "/screen-readers",
});
</script>
