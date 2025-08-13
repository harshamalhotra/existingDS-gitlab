<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_BACKGROUNDS } from "../constants";

definePageMeta({
  title: "Gradient Color Stops",
  category: CATEGORY_BACKGROUNDS,
});
</script>
