<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_INTERACTIVITY } from "../constants";

definePageMeta({
  title: "User Select",
  category: CATEGORY_INTERACTIVITY,
});
</script>
