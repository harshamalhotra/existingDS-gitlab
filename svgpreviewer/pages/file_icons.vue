<script>
import icons from '../static/dist/file_icons/file_icons.json';
import SvgAlbum from '../components/svg_album.vue';

export default {
  name: 'HomePage',
  components: {
    SvgAlbum,
  },
  data() {
    return {
      items: icons.icons,
    };
  },
};
</script>

<template>
  <svg-album
    :items="items"
    image-sprite="dist/file_icons/file_icons.svg"
    source-path="https://gitlab.com/gitlab-org/gitlab-svgs/blob/main/file_icons/"
    title="File icon"
    copy-message="Click a file icon to copy the name"
  />
</template>
