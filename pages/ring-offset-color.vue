<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_BORDERS } from "../constants";

definePageMeta({
  title: "Ring Offset Color",
  category: CATEGORY_BORDERS,
});
</script>
