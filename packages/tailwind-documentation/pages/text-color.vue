<template>
  <div>
    <PageTitle />
    <UtilitiesTable :show-color-swatch="true" />
  </div>
</template>

<script setup>
import { CATEGORY_TYPOGRAPHY } from "../constants";

definePageMeta({
  title: "Text Color",
  category: CATEGORY_TYPOGRAPHY,
});
</script>
