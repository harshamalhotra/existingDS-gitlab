<template>
  <div>
    <PageTitle />
    <UtilitiesTable :show-color-swatch="true" />
  </div>
</template>

<script setup>
import { CATEGORY_EFFECTS } from "../constants";

definePageMeta({
  title: "Box Shadow Color",
  category: CATEGORY_EFFECTS,
});
</script>
