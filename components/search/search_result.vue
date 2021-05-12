<script>
export default {
  props: {
    meta: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <gl-dropdown-item :to="meta.route" v-on="$listeners">
    {{ meta.title }}
  </gl-dropdown-item>
</template>
