<script>
import copyToClipboard from '../../helpers/copy_to_clipboard';
import { bytesToKiloBytes } from '../../helpers/unit_utils';
import SvgIcon from './svg_icon.vue';

export default {
  components: {
    SvgIcon,
  },
  props: {
    image: {
      type: String,
      required: true,
    },
    imageSize: {
      type: Number,
      required: false,
      default: 0,
    },
    sourcePath: {
      type: String,
      required: true,
    },
  },
  computed: {
    imageName() {
      return this.image.replace(/_/g, '_\u200B');
    },
    sourceLink() {
      const path = `${this.sourcePath}${this.image}`;
      return path.endsWith('.svg') || path.endsWith('.png') ? path : `${path}.svg`;
    },
    kbSize() {
      return bytesToKiloBytes(this.imageSize);
    },
  },
  methods: {
    copyImage() {
      this.$emit('imageCopied', copyToClipboard(this.image) ? 1 : -1);
    },
    selectPermalink() {
      this.$emit('permalinkSelected', this.image);
    },
  },
};
</script>

<template>
  <div class="image-wrapper">
    <div class="image-base" @click="copyImage">
      <slot></slot>
      <div class="image-name">
        {{ imageName }}
        <span v-if="imageSize"> ({{ kbSize }}) </span>
      </div>
    </div>
    <div class="image-actions">
      <a title="Copy to clipboard" @click="copyImage">
        <svg-icon icon="copy-to-clipboard" class="image-sm" />
      </a>
      <a title="Permalink" @click="selectPermalink">
        <svg-icon icon="link" class="image-sm" />
      </a>
      <a title="Open source" target="_blank" :href="sourceLink">
        <svg-icon icon="external-link" class="image-sm" />
      </a>
    </div>
  </div>
</template>
