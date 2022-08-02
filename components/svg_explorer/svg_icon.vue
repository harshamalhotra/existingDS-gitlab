<script>
import iconSprite from '@gitlab/svgs/dist/icons.svg';

export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  computed: {
    spritePath() {
      return `${iconSprite}#${this.icon}`;
    },
  },
};
</script>

<template>
  <svg>
    <use v-bind="{ 'xlink:href': spritePath }" />
  </svg>
</template>
