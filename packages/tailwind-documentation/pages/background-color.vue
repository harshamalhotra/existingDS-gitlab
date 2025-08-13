<template>
  <div>
    <PageTitle />
    <UtilitiesTable :show-color-swatch="true" />
  </div>
</template>

<script setup>
import { CATEGORY_BACKGROUNDS } from "../constants";

definePageMeta({
  title: "Background Color",
  category: CATEGORY_BACKGROUNDS,
});
</script>
