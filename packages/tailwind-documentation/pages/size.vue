<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_SIZING } from "../constants";

definePageMeta({
  title: "Size",
  category: CATEGORY_SIZING,
});
</script>
