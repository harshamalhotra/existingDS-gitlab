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
    :elements="items"
    layout="illustrations"
    source-path="https://gitlab.com/gitlab-org/gitlab-svgs/blob/main/"
    title="Illustration"
  />
</template>
