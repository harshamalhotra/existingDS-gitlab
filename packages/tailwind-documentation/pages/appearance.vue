<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_INTERACTIVITY } from "../constants";

definePageMeta({
  title: "Appearance",
  category: CATEGORY_INTERACTIVITY,
});
</script>
