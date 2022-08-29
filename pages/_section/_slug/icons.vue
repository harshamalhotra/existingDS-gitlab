<script>
import iconData from '@gitlab/svgs/dist/icons.json';
import SvgIcon from '../../../components/svg_explorer/svg_icon.vue';
import SvgAlbum from '../../../components/svg_explorer/svg_album.vue';
import { bytesToKiloBytes } from '../../../helpers/unit_utils';

const sizeOptions = [
  { value: 'image-xs', label: 'Extra Small (12px)' },
  { value: 'image-sm', label: 'Small (Default 16px)', default: true },
  { value: 'image-md', label: 'Medium (32px)' },
  { value: 'image-lg', label: 'Large (48px)' },
  { value: 'image-xl', label: 'Extra Large (72px)' },
  { value: 'image-hu', label: 'Huge (256px)' },
  { value: 'image-nav', label: 'Sidemenu' },
];

export default {
  sizeOptions,
  icons: iconData.icons.map((name) => ({ name })),
  components: {
    SvgAlbum,
    SvgIcon,
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
    source-path="https://gitlab.com/gitlab-org/gitlab-svgs/blob/main/sprite_icons/"
    class="icons-explorer"
  >
    <template #header>{{ $options.icons.length }} Icons ({{ kbSize }})</template>
    <template #figure="{ entry, className }">
      <svg-icon :icon="entry.name" :class="className" />
    </template>
    <template #no-result>No icons found. Click here to reset your search!</template>
  </svg-album>
</template>
