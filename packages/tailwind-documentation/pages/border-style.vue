<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_BORDERS } from "../constants";

definePageMeta({
  title: "Border Style",
  category: CATEGORY_BORDERS,
});
</script>
