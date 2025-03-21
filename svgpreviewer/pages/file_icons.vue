<script>
import icons from '../static/dist/file_icons/file_icons_individual.json';
import SvgAlbum from '../components/svg_album.vue';

export default {
  name: 'HomePage',
  components: {
    SvgAlbum,
  },
  data() {
    return {
      items: icons.illustrations,
    };
  },
};
</script>

<template>
  <svg-album
    :elements="items"
    source-path="https://gitlab.com/gitlab-org/gitlab-svgs/blob/main/file_icons/"
    title="File icon"
  />
</template>
