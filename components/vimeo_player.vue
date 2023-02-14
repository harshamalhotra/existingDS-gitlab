<script>
export default {
  props: {
    title: {
      default: '',
      required: false,
      type: String,
    },
    videoId: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      /**
       * Vimeo player embed options
       * https://developer.vimeo.com/player/sdk/embed
       */
      options: {
        color: '7b58cf',
        title: false,
        byline: false,
        portrait: false,
      },
    };
  },
  computed: {
    src() {
      const params = new URLSearchParams(this.options).toString();
      return `https://player.vimeo.com/video/${this.videoId}?${params}`;
    },
  },
};
</script>

<template>
  <div class="gl-relative" style="padding-top: 56.25%">
    <iframe
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
      class="gl-absolute gl-top-0 gl-right-0 gl-bottom-0 gl-left-0 gl-w-full gl-h-full"
      frameborder="0"
      :src="src"
      :title="title"
    ></iframe>
  </div>
</template>
