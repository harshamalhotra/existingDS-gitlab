<template>
  <a
    class="btn gl-button btn-default btn-md"
    :href="props.href"
    ><slot
  /></a>
</template>

<script setup>
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
});
</script>
