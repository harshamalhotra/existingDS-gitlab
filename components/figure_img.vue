<script>
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
    <img v-if="src" class="figure-img" :src="src" :alt="altText" role="img" :style="style" />
    <figcaption class="figure-caption">
      <template v-if="!hasCaptionSlot">{{ label }}</template>
      <slot name="caption"></slot>
    </figcaption>
  </figure>
</template>
