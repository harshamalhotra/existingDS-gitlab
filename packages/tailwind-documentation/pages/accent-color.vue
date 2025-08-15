<template>
  <div>
    <PageTitle />
    <UtilitiesTable :show-color-swatch="true" />
  </div>
</template>

<script setup>
import { CATEGORY_INTERACTIVITY } from "../constants";

definePageMeta({
  title: "Accent Color",
  category: CATEGORY_INTERACTIVITY,
});
</script>
