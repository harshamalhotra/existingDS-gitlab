<template>
  <div>
    <PageTitle />
    <UtilitiesTable :show-color-swatch="true" />
  </div>
</template>

<script setup>
import { CATEGORY_BORDERS } from "../constants";

definePageMeta({
  title: "Border Color",
  category: CATEGORY_BORDERS,
});
</script>
