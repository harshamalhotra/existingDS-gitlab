<script>
import { GlIcon } from '../helpers/gitlab_ui';

export default {
  name: 'ColorChip',
  components: {
    GlIcon,
  },
  props: {
    color: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
      default: null,
    },
    size: {
      type: String,
      required: false,
      default: 'sm',
      validator: (value) => ['sm', 'lg'].includes(value),
    },
  },
  computed: {
    nameArray() {
      return this.name.split('.');
    },
    isBorderColor() {
      return this.name && this.nameArray.includes('border');
    },
    isIconColor() {
      return this.name && this.nameArray.includes('icon');
    },
    isTextColor() {
      return this.name && this.nameArray.includes('text');
    },
    sizeClass() {
      return {
        'gl-h-5 gl-w-5': this.size === 'sm',
        'gl-h-9 gl-w-9': this.size === 'lg',
      };
    },
  },
};
</script>

<template>
  <span aria-hidden="true" class="color-chip" :class="sizeClass">
    <span
      v-if="isBorderColor"
      class="gl-inline-block gl-rounded-default gl-border-4 gl-border-solid"
      :class="sizeClass"
      :style="{ 'border-color': color }"
    ></span>
    <gl-icon v-else-if="isIconColor" name="smiley" :size="32" :style="{ color: color }" />
    <span v-else-if="isTextColor" :style="{ color: color, 'font-size': '200%' }">Aa</span>
    <span
      v-else
      class="gl-inline-block"
      :class="sizeClass"
      :style="{ 'background-color': color }"
    ></span>
  </span>
</template>
