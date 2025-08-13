<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_TRANSFORMS } from "../constants";

definePageMeta({
  title: "Transform Origin",
  category: CATEGORY_TRANSFORMS,
});
</script>
