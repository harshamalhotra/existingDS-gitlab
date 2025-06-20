<script>
export default {
  props: {
    component: {
      type: String,
      required: true,
    },
  },
  computed: {
    inspectUrl() {
      return `${this.$lookbookUrl}/inspect/pajamas/${this.component}`;
    },
    previewName() {
      const capitalizedComponentName = this.component
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
      return `Pajamas::${capitalizedComponentName}ComponentPreview`;
    },
  },
  async mounted() {
    await this.$nextTick();
    window.Lookbook.initEmbeds();
  },
};
</script>

<template>
  <lookbook-embed :app="$lookbookUrl" :preview="previewName" panels="params,notes,*" />
</template>
