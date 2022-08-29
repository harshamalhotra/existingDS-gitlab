<script>
import illustrations from '@gitlab/svgs/dist/illustrations.json';
import SvgAlbum from '../../../components/svg_explorer/svg_album.vue';

/**
 * Load all illustration SVGs with webpack
 */
const illustrationSources = {};
const requireContext = require.context('@gitlab/svgs/dist/illustrations/', true, /\.(png|svg)$/);

requireContext.keys().forEach((key) => {
  const cacheKey = key.replace(/^(\.\/)?/, 'illustrations/');
  illustrationSources[cacheKey] = requireContext(key);
});

export default {
  illustrations,
  components: {
    SvgAlbum,
  },
  methods: {
    imagePath(path) {
      return illustrationSources[path];
    },
  },
};
</script>

<template>
  <svg-album
    :elements="Object.freeze($options.illustrations.illustrations)"
    source-path="https://gitlab.com/gitlab-org/gitlab-svgs/blob/main/"
    class="illustrations-explorer"
  >
    <template #header> {{ $options.illustrations.illustrationCount }} Illustrations</template>
    <template #figure="{ entry }">
      <img alt="" :src="imagePath(entry.name)" />
    </template>
    <template #no-result> No illustrations found. Click here to reset your search! </template>
  </svg-album>
</template>
