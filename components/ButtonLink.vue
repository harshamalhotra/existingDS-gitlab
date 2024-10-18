<template>
  <a
    class="gl-button gl-border gl-rounded-base gl-border-gray-200 gl-p-3 gl-transition-all hover:gl-bg-gray-50"
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
