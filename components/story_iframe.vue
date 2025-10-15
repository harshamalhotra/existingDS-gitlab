<script>
import { iframeResize } from 'iframe-resizer';
import { mapState } from 'vuex';
import { GlLoadingIcon } from '../helpers/gitlab_ui';
import { SkipOneTrustDirective } from '../directives/skip_one_trust_directive';

export default {
  components: {
    GlLoadingIcon,
  },
  directives: {
    skipOneTrust: SkipOneTrustDirective,
  },
  props: {
    url: {
      type: String,
      required: true,
    },
    iframePadding: {
      type: String,
      required: false,
      default: null,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loaded: false,
    };
  },
  computed: {
    ...mapState('mode', ['isDarkMode']),
    iFrameClass() {
      return {
        'gl-opacity-0': !this.loaded,
      };
    },
    iframeResizeOptions() {
      const options = {};
      if (this.iframePadding) {
        options.bodyPadding = this.iframePadding;
      }
      return options;
    },
  },
  watch: {
    isDarkMode(newValue) {
      this.updateDarkModeClass(newValue);
    },
  },
  mounted() {
    window.addEventListener('message', this.handlePostMessageFromIframe);
  },
  beforeDestroy() {
    window.removeEventListener('message', this.handlePostMessageFromIframe);
  },
  methods: {
    iFrameLoaded({ target }) {
      iframeResize(this.iframeResizeOptions, target);
      this.loaded = true;
      this.updateDarkModeClass(this.isDarkMode);
    },
    handlePostMessageFromIframe(event) {
      if (event.data && event.data.type === 'REQUEST_DARK_MODE_STATE') {
        event.source.postMessage({ isDarkMode: this.isDarkMode }, event.origin);
      }
    },
    updateDarkModeClass(isDarkMode) {
      if (this.$refs.iframe?.contentWindow) {
        this.$refs.iframe.contentWindow.postMessage({ isDarkMode }, '*');
      }
    },
  },
};
</script>

<template>
  <div class="gl-relative">
    <div
      v-if="!loaded"
      class="gl-absolute gl-bottom-0 gl-left-0 gl-right-0 gl-top-0 gl-flex gl-flex-col gl-items-center gl-justify-center"
    >
      <gl-loading-icon size="lg" class="gl-mb-3" />
      Loading story...
    </div>
    <iframe
      ref="iframe"
      v-skip-one-trust
      :src="url"
      :class="iFrameClass"
      class="responsive-iframe gl-min-w-full gl-border-none"
      allow="clipboard-write"
      :title="title"
      @load="iFrameLoaded"
    ></iframe>
  </div>
</template>
