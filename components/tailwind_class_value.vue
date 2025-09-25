<script>
export default {
  props: {
    prefix: {
      required: true,
      type: String,
    },
    property: {
      required: true,
      type: String,
    },
    item: {
      required: true,
      type: Object,
    },
  },
  computed: {
    className() {
      return [`${this.prefix}${this.property}`, this.item.key !== 'DEFAULT' ? this.item.key : null]
        .filter(Boolean)
        .join('-');
    },
  },
};
</script>

<template>
  <div class="gl-mt-3">
    <div class="gl-text-sm gl-text-strong gl-font-monospace">
      {{ className }}
    </div>
    <div class="gl-mt-1 gl-text-sm gl-text-subtle gl-font-monospace">
      {{ item.value }}
    </div>
  </div>
</template>
