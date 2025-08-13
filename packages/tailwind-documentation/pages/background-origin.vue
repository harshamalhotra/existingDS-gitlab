<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_BACKGROUNDS } from "../constants";

definePageMeta({
  title: "Background Origin",
  category: CATEGORY_BACKGROUNDS,
});
</script>
