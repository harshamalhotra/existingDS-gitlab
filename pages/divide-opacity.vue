<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_BORDERS } from "../constants";

definePageMeta({
  title: "Divide Opacity",
  category: CATEGORY_BORDERS,
});
</script>
