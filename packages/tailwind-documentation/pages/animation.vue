<template>
  <div>
    <PageTitle />
    <UtilitiesTable />
  </div>
</template>

<script setup>
import { CATEGORY_TRANSITIONS_AND_ANIMATION } from "../constants";

definePageMeta({
  title: "Animation",
  category: CATEGORY_TRANSITIONS_AND_ANIMATION,
});
</script>
