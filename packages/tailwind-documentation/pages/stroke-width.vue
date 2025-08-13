<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_SVG } from "../constants";

definePageMeta({
  title: "Stroke Width",
  category: CATEGORY_SVG,
});
</script>
