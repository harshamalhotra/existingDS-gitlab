<script>
export default {
  name: 'BorderRadius',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <span
    aria-hidden="true"
    class="gl-block gl-h-9 gl-w-9 gl-bg-status-brand"
    :style="{ 'border-radius': value }"
  ></span>
</template>
