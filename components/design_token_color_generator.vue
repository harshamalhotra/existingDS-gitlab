<script>
import { GlFormGroup, GlFormInput, GlFormTextarea } from '../helpers/gitlab_ui';

export default {
  name: 'DesignTokenColorGenerator',
  components: {
    GlFormGroup,
    GlFormInput,
    GlFormTextarea,
  },
  data() {
    return {
      colorInput: '',
      designToken: null,
      invalidFeedback: null,
      state: true,
    };
  },
  computed: {
    formattedOutput() {
      return this.designToken ? JSON.stringify(this.designToken, null, 2) : '';
    },
  },
  methods: {
    convertColor() {
      this.state = true;
      this.invalidFeedback = null;

      if (!this.colorInput.trim()) {
        this.designToken = null;
        return;
      }

      try {
        const token = this.parseColorToToken(this.colorInput.trim());
        this.designToken = token;
      } catch (error) {
        this.state = false;
        this.invalidFeedback = error.message;
        this.designToken = null;
      }
    },
    parseColorToToken(input) {
      // Handle hex colors
      if (input.startsWith('#')) {
        return this.parseHexColor(input);
      }

      // Handle rgba colors
      if (input.startsWith('rgba(')) {
        return this.parseRgbaColor(input);
      }

      // Handle rgb colors (assume alpha = 1)
      if (input.startsWith('rgb(')) {
        return this.parseRgbColor(input);
      }

      throw new Error('Unsupported color format.');
    },
    parseHexColor(hex) {
      // Remove # and validate
      const cleanHex = hex.slice(1);

      if (!/^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{6}$/.test(cleanHex)) {
        throw new Error('Invalid hex format.');
      }

      // Expand 3-digit hex to 6-digit
      const fullHex = cleanHex.length === 3 ? [...cleanHex].map((c) => c + c).join('') : cleanHex;

      // Convert to RGB values (0-255)
      const r = parseInt(fullHex.slice(0, 2), 16);
      const g = parseInt(fullHex.slice(2, 4), 16);
      const b = parseInt(fullHex.slice(4, 6), 16);

      // Convert to 0-1 range
      const components = [r / 255, g / 255, b / 255];

      return {
        $value: {
          colorSpace: 'srgb',
          components,
          alpha: 1,
          hex: `#${fullHex.toLowerCase()}`,
        },
      };
    },
    parseRgbaColor(rgba) {
      // Extract values from rgba(r, g, b, a)
      const match = rgba.match(
        /rgba\(\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\s*\)/,
      );

      if (!match) {
        throw new Error('Invalid rgb/rgba format.');
      }

      const [, r, g, b, a] = match.map(Number);

      // Validate ranges
      if (r > 255 || g > 255 || b > 255 || a > 1) {
        throw new Error('RGBA values out of range.');
      }

      // Convert RGB to 0-1 range
      const components = [r / 255, g / 255, b / 255];

      const token = {
        $value: {
          colorSpace: 'srgb',
          components,
          alpha: a,
        },
      };

      // Add hex representation if alpha is 1
      if (a === 1) {
        const hex = `#${[r, g, b].map((val) => Math.round(val).toString(16).padStart(2, '0')).join('')}`;
        token.$value.hex = hex;
      }

      return token;
    },
    parseRgbColor(rgb) {
      // Convert rgb to rgba with alpha = 1
      const rgbaString = rgb.replace('rgb(', 'rgba(').replace(')', ', 1)');
      return this.parseRgbaColor(rgbaString);
    },
  },
};
</script>

<template>
  <div class="color-token-converter">
    <gl-form-group
      label-for="design-token-color-generator-color-input"
      label="Color Input"
      class="gl-mb-4"
      :invalid-feedback="invalidFeedback"
    >
      <gl-form-input
        id="design-token-color-generator-color-input"
        v-model="colorInput"
        class="!gl-font-monospace"
        :state="state"
        @input="convertColor"
      />
      <template #description>
        Accepts a hexadecimal, <code>rgb()</code>, or <code>rgba()</code> value. For example
        <code>#fff</code>, <code>rgb(255, 255, 255)</code>, or <code>rgba(255, 255, 255, 1)</code>.
      </template>
    </gl-form-group>
    <gl-form-group
      label-for="design-token-color-generator-color-output"
      label="Design Token Output"
    >
      <gl-form-textarea
        id="design-token-color-generator-color-output"
        class="!gl-font-monospace"
        :value="formattedOutput"
        rows="12"
        readonly
      />
    </gl-form-group>
  </div>
</template>
