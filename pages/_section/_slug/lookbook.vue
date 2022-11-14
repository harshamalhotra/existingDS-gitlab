<script>
import StoryIframe from '../../../components/story_iframe.vue';

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
  components: {
    StoryIframe,
  },
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  computed: {
    lookbookComponentName() {
      return NAME_MAPPING[this.page.slug];
    },
    lookbookInspectUrl() {
      return `${this.$lookbookUrl}/lookbook/inspect/pajamas/${this.lookbookComponentName}`;
    },
    lookbookPreviewUrl() {
      return `${this.$lookbookUrl}/lookbook/preview/pajamas/${this.lookbookComponentName}/default?_display=`;
    },
  },
};
</script>

<template>
  <div class="app-styles gl-pt-0 gl-pb-4">
    <div v-if="lookbookComponentName">
      <story-iframe :url="lookbookPreviewUrl" />
      <b>
        Find <a :href="lookbookInspectUrl">more customizable previews</a> and implementation details
        of the {{ lookbookComponentName }} ViewComponent in our Lookbook.
      </b>
    </div>
    <div v-else>
      <i>The {{ page.slug }} component is not available as ViewComponent.</i>
    </div>
  </div>
</template>
