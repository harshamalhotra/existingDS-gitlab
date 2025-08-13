<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_TYPOGRAPHY } from "../constants";

definePageMeta({
  title: "Text Underline Offset",
  category: CATEGORY_TYPOGRAPHY,
});
</script>
