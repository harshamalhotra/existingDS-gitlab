<script>
import icons from '../static/dist/icons.json';
import SvgAlbum from '../components/svg_album.vue';

export default {
  name: 'HomePage',
  components: {
    SvgAlbum,
  },
  data() {
    return {
      items: icons.icons,
      sizeOptions: [
        { value: 8, text: '8' },
        { value: 12, text: '12' },
        { value: 14, text: '14' },
        { value: 16, text: '16', default: true },
        { value: 24, text: '24' },
        { value: 32, text: '32' },
        { value: 48, text: '48' },
        { value: 72, text: '72' },
      ],
    };
  },
};
</script>

<template>
  <svg-album
    :items="items"
    :size-options="sizeOptions"
    image-sprite="dist/icons.svg"
    source-path="https://gitlab.com/gitlab-org/gitlab-svgs/blob/main/sprite_icons/"
    title="Icon"
  />
</template>
