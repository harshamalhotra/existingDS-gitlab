<script>
import { GlButton, GlCard } from '../../helpers/gitlab_ui';
import copyToClipboard from '../../helpers/copy_to_clipboard';
import { bytesToKiloBytes } from '../../helpers/unit_utils';

export default {
  components: {
    GlButton,
    GlCard,
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
  <gl-card body-class="gl-grow" footer-class="!gl-p-3">
    <template #default>
      <div
        class="gl-flex gl-flex-col gl-items-center gl-justify-center gl-gap-3"
        @click="copyImage"
      >
        <slot></slot>
        <div class="gl-text-center gl-text-subtle">
          {{ imageName }}
          <span v-if="imageSize"> ({{ kbSize }}) </span>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="gl-flex gl-justify-center">
        <gl-button
          aria-label="Copy to clipboard"
          category="tertiary"
          icon="copy-to-clipboard"
          @click="copyImage"
        />
        <gl-button
          aria-label="Permalink"
          category="tertiary"
          icon="link"
          @click="selectPermalink"
        />
        <gl-button
          aria-label="Open source"
          category="tertiary"
          icon="external-link"
          target="_blank"
          :href="sourceLink"
        />
      </div>
    </template>
  </gl-card>
</template>
