<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_TRANSFORMS } from "../constants";

definePageMeta({
  title: "Skew",
  category: CATEGORY_TRANSFORMS,
});
</script>
