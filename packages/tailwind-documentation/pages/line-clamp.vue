<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_TYPOGRAPHY } from "../constants";

definePageMeta({
  title: "Line Clamp",
  category: CATEGORY_TYPOGRAPHY,
});
</script>
