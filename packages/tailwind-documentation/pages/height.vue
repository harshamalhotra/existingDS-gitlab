<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_SIZING } from "../constants";

definePageMeta({
  title: "Height",
  category: CATEGORY_SIZING,
});
</script>
