<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_BACKGROUNDS } from "../constants";

definePageMeta({
  title: "Background Opacity",
  category: CATEGORY_BACKGROUNDS,
});
</script>
