<script>
import { translate } from '../../../utils/i18n';
import GlButton from '../button/button.vue';

export default {
  name: 'GlColorModeToggle',
  components: {
    GlButton,
  },
  props: {
    /**
     * Whether dark mode is currently active.
     */
    isDarkMode: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * The label when in dark mode. Screen-reader only.
     */
    darkLabel: {
      type: String,
      required: false,
      default: () => translate('GlColorModeToggle.darkLabel', 'Dark mode'),
    },
    /**
     * The label when in light mode. Screen-reader only.
     */
    lightLabel: {
      type: String,
      required: false,
      default: () => translate('GlColorModeToggle.lightLabel', 'Light mode'),
    },
  },
  computed: {
    ariaLabel() {
      return this.isDarkMode ? this.darkLabel : this.lightLabel;
    },
    iconName() {
      return this.isDarkMode ? 'moon' : 'sun';
    },
  },
  methods: {
    /**
     * Emitted when the toggle button is clicked.
     *
     * @event toggle
     */
    handleClick() {
      this.$emit('toggle');
    },
  },
};
</script>

<template>
  <gl-button
    :aria-label="ariaLabel"
    class="btn-icon"
    category="tertiary"
    :icon="iconName"
    @click="handleClick"
  />
</template>
