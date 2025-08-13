<template>
  <div>
    <PageTitle />
    <UtilitiesTable :show-color-swatch="true" />
  </div>
</template>

<script setup>
import { CATEGORY_SVG } from "../constants";

definePageMeta({
  title: "Stroke",
  category: CATEGORY_SVG,
});
</script>
