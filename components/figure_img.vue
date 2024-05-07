<script>
import fixUrlInReviewApp from '../helpers/fix_url_in_review_app';

export default {
  props: {
    alt: {
      type: String,
      required: false,
      default: '',
    },
    dark: {
      type: Boolean,
      default: false,
      required: false,
    },
    label: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      default: '',
      required: false,
    },
    width: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      loaded: false,
    };
  },
  computed: {
    altText() {
      return this.alt || this.label;
    },
    hasCaptionSlot() {
      return Boolean(this.$scopedSlots.caption);
    },
    style() {
      return this.width ? `width:100%; max-width:${this.width}px` : '';
    },
    fixedSrc() {
      if (this.src) {
        return fixUrlInReviewApp(this.src);
      }
      return this.src;
    },
  },
};
</script>

<template>
  <figure
    :aria-label="label"
    class="figure"
    :class="{
      'figure--dark': dark,
    }"
    role="figure"
  >
    <slot></slot>
    <img v-if="src" class="figure-img" :src="fixedSrc" :alt="altText" role="img" :style="style" />
    <figcaption class="figure-caption">
      <template v-if="!hasCaptionSlot">{{ label }}</template>
      <slot name="caption"></slot>
    </figcaption>
  </figure>
</template>
