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
    };
  },
};
</script>

<template>
  <svg-album
    :items="items"
    layout="illustrations"
    source-path="https://gitlab.com/gitlab-org/gitlab-svgs/blob/main/"
    title="Illustration"
    copy-message="Click an illustration to copy the path"
  />
</template>
