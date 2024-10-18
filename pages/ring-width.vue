<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_BORDERS } from "../constants";

definePageMeta({
  title: "Ring Width",
  category: CATEGORY_BORDERS,
});
</script>
