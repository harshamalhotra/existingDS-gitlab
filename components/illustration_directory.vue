<script>
import illustrations from '@gitlab/svgs/dist/illustrations_individual.json';
import SvgAlbum from './svg_explorer/svg_album.vue';

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
    layout="illustrations"
  >
    <template #header> {{ $options.illustrations.illustrationCount }} Illustrations</template>
    <template #figure="{ entry }">
      <img alt="" :src="imagePath(entry.name)" />
    </template>
  </svg-album>
</template>
