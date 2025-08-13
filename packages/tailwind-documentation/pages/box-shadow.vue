<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_EFFECTS } from "../constants";

definePageMeta({
  title: "Box Shadow",
  category: CATEGORY_EFFECTS,
});
</script>
