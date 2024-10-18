<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_TRANSFORMS } from "../constants";

definePageMeta({
  title: "Rotate",
  category: CATEGORY_TRANSFORMS,
});
</script>
