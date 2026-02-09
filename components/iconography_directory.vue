<script>
import iconData from '@gitlab/svgs/dist/icons.json';
import { GlIcon } from '../helpers/gitlab_ui';
import { bytesToKiloBytes } from '../helpers/unit_utils';
import SvgAlbum from './svg_explorer/svg_album.vue';

const sizeOptions = [
  { value: 12, text: '12' },
  { value: 16, text: '16', default: true },
];

export default {
  sizeOptions,
  icons: iconData.icons.map((name) => ({ name })),
  components: {
    SvgAlbum,
    GlIcon,
  },
  computed: {
    kbSize() {
      return bytesToKiloBytes(iconData.spriteSize);
    },
  },
};
</script>

<template>
  <svg-album
    :elements="Object.freeze($options.icons)"
    :size-options="$options.sizeOptions"
    source-path="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/tree/main/packages/gitlab-svgs/sprite_icons/"
  >
    <template #header>{{ $options.icons.length }} Icons ({{ kbSize }})</template>
    <template #figure="{ entry, size }">
      <gl-icon :name="entry.name" :size="size" />
    </template>
  </svg-album>
</template>
