<script>
const NAME_MAPPING = {
  // alert: 'alert',
  // avatar: 'avatar',
  badge: 'badge',
  banner: 'banner',
  button: 'button',
  card: 'card',
  'progress-bar': 'progress',
  spinner: 'spinner',
};

export default {
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  head() {
    return {
      script: [
        {
          src: `${this.$lookbookUrl}/../lookbook-assets/js/lookbook-core.js`,
          body: true,
        },
      ],
    };
  },
  computed: {
    lookbookComponentName() {
      return NAME_MAPPING[this.page.slug];
    },
    lookbookInspectUrl() {
      return `${this.$lookbookUrl}/inspect/pajamas/${this.lookbookComponentName}`;
    },
    lookbookPreviewUrl() {
      return `${this.$lookbookUrl}/preview/pajamas/${this.lookbookComponentName}/default?_display=`;
    },
    previewName() {
      const capitalizedComponentName =
        this.lookbookComponentName.charAt(0).toUpperCase() + this.lookbookComponentName.slice(1);
      return `Pajamas::${capitalizedComponentName}ComponentPreview`;
    },
  },
};
</script>

<template>
  <div class="app-styles gl-pt-0 gl-pb-4">
    <div v-if="lookbookComponentName">
      <lookbook-embed :app="$lookbookUrl" :preview="previewName" panels="params,notes,*" />
      <p class="gl-pt-4">
        <b>
          Find <a :href="lookbookInspectUrl">more scenarios</a> of the
          {{ lookbookComponentName }} component in our Lookbook.
        </b>
      </p>
    </div>
    <div v-else>
      <i>The {{ page.slug }} component is not available as ViewComponent.</i>
    </div>
  </div>
</template>
