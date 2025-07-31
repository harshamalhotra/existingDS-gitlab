<script>
export default {
  name: 'ColorChip',
  props: {
    color: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: false,
      default: 'sm',
      validator: (value) => ['sm', 'lg'].includes(value),
    },
  },
};
</script>

<template>
  <span class="color-chip" :class="`color-chip-${size}`">
    <span class="color-chip-swatch" :style="{ 'background-color': color }"></span>
  </span>
</template>
