<script>
import illustrationsData from '@gitlab/svgs/dist/illustrations.json';
import { GlIllustration } from '../helpers/gitlab_ui';
import { bytesToKiloBytes } from '../helpers/unit_utils';
import SvgAlbum from './svg_explorer/svg_album.vue';

export default {
  illustrations: illustrationsData.icons.map((obj) => ({ name: obj.name })),
  components: {
    SvgAlbum,
    GlIllustration,
  },
  computed: {
    kbSize() {
      return bytesToKiloBytes(illustrationsData.spriteSize);
    },
  },
};
</script>

<template>
  <svg-album
    :elements="Object.freeze($options.illustrations)"
    source-path="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/tree/main/packages/gitlab-svgs/illustrations"
    layout="illustrations"
  >
    <template #header>{{ $options.illustrations.length }} Illustrations ({{ kbSize }})</template>
    <template #figure="{ entry }">
      <gl-illustration :name="entry.name" />
    </template>
  </svg-album>
</template>
