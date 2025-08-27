<template>
  <span v-if="isValueInRem" class="gl-text-subtle"
    >/* {{ valueAsPixel }}px */</span
  >
</template>

<script setup>
import isString from "lodash/isString";

const props = defineProps({
  value: {
    type: [String, Number, Object],
    required: true,
  },
});

const isValueInRem = computed(() => {
  if (!isString(props.value)) {
    return false;
  }

  return props.value.endsWith("rem");
});

const valueAsPixel = computed(() => {
  if (!isValueInRem.value) {
    return;
  }

  return parseFloat(props.value.replace("rem", "")) * 16;
});
</script>
