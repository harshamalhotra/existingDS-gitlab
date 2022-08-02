<script>
import ColorContrastScore from './color_contrast_score.vue';

export default {
  components: {
    ColorContrastScore,
  },
  props: {
    name: {
      type: String,
      required: false,
      default: '',
    },
    backgroundClassPrefix: {
      type: String,
      required: false,
      default: '',
    },
    shades: {
      type: Array,
      required: true,
      validator: (shades) => {
        const hasInvalidClass = shades.some(
          (shade) => shade.classes !== undefined && !Array.isArray(shade.classes),
        );
        if (hasInvalidClass) {
          // eslint-disable-next-line no-console
          console.error('shades[].classes should be an array');
          return false;
        }
        return true;
      },
    },
    showContrastScores: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<template>
  <div>
    <slot name="header">
      <h3 v-if="name" data-testid="name">{{ name }}</h3>
    </slot>
    <div class="distributed palette">
      <div v-for="shade in shades" :key="shade.name" class="color">
        <div
          class="color-overview gl-px-5 gl-py-3"
          :class="[`${backgroundClassPrefix}${shade.name}`, ...shade.classes]"
        >
          <span class="variable">${{ shade.name }}</span>
          <span class="hex f-small">{{ shade.code }}</span>
        </div>
        <div
          v-if="showContrastScores"
          class="color-details gl-px-5 gl-py-6"
          :class="`c-border-${shade.name}`"
        >
          <div class="color-details--section">
            <div class="gl-font-weight-bold gl-mb-2">Passing level and contrast ratio</div>
            <color-contrast-score :bg-color-hex="shade.code" :name="shade.name" />
            <color-contrast-score :bg-color-hex="shade.code" :name="shade.name" with-white-text />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
