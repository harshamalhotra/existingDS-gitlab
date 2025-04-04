<script>
import illustrations from '../static/dist/illustrations.json';
import SvgAlbum from '../components/svg_album.vue';

export default {
  name: 'IllustrationPage',
  components: {
    SvgAlbum,
  },
  data() {
    return {
      items: illustrations.illustrations,
      spriteSize: illustrations.spriteSize,
    };
  },
};
</script>

<template>
  <svg-album
    :items="items"
    layout="illustrations"
    image-sprite="dist/illustrations.svg"
    source-path="https://gitlab.com/gitlab-org/gitlab-svgs/blob/main/"
    :size-in-json="true"
    :sprite-size="spriteSize"
    title="Illustration"
    copy-message="Click an illustration to copy the path"
  />
</template>
