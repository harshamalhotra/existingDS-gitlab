<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_TYPOGRAPHY } from "../constants";

definePageMeta({
  title: "Text Overflow",
  category: CATEGORY_TYPOGRAPHY,
});
</script>
