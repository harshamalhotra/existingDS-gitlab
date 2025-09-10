<script>
import { GL_COLOR_NEUTRAL_0 } from '@gitlab/ui/src/tokens/build/js/tokens';
import { HEX_REGEX, getColorContrast } from '../helpers/gitlab_ui';

export default {
  name: 'GlColorContrast',
  props: {
    foreground: {
      type: String,
      required: true,
      validator: (value) => HEX_REGEX.test(value),
    },
    background: {
      type: String,
      required: true,
      validator: (value) => HEX_REGEX.test(value),
    },
  },
  computed: {
    isValidColorCombination() {
      return HEX_REGEX.test(this.foreground) && HEX_REGEX.test(this.background);
    },
    hasPassingContrast() {
      return getColorContrast(GL_COLOR_NEUTRAL_0, this.background).score > 4.5;
    },
    classes() {
      if (!this.isValidColorCombination) return 'gl-text-neutral-950';

      const isFail = this.contrast.level.grade === 'F';

      if (isFail) {
        return this.hasPassingContrast
          ? 'gl-light-scope gl-shadow-inner-1-red-300 gl-text-red-300'
          : 'gl-light-scope gl-shadow-inner-1-red-500 gl-text-red-500';
      }

      return this.hasPassingContrast ? 'gl-text-neutral-0' : 'gl-text-neutral-950';
    },
    contrast() {
      return getColorContrast(this.foreground, this.background);
    },
  },
};
</script>

<template>
  <code
    class="gl-rounded-default gl-w-10 gl-p-2 gl-text-center gl-text-xs"
    :class="classes"
    :style="{ backgroundColor: background }"
  >
    <template v-if="isValidColorCombination">
      {{ contrast.level.grade }} {{ contrast.score }}
    </template>
    <template v-else>???</template>
  </code>
</template>
