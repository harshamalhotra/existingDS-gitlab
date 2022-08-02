<script>
const CONTRAST_FAIL = 'F';
const CONTRAST_LARGE_TEXT = 'AA+';
const CONTRAST_MINIMUM = 'AA';
const CONTRAST_PASS = 'AAA';
const CONTRAST_LEVELS = [
  {
    grade: CONTRAST_FAIL,
    class: 'fail',
    min: 0,
    max: 3,
  },
  {
    grade: CONTRAST_LARGE_TEXT,
    class: 'pass',
    min: 3,
    max: 4.5,
  },
  {
    grade: CONTRAST_MINIMUM,
    class: 'pass',
    min: 4.5,
    max: 7,
  },
  {
    grade: CONTRAST_PASS,
    class: 'pass',
    min: 7,
    max: 22,
  },
];

export default {
  props: {
    bgColorHex: {
      type: String,
      required: true,
      validator: (value) => /^#[a-f\d]{3,6}$/i.test(value),
    },
    name: {
      type: String,
      required: true,
    },
    withWhiteText: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    textRGB() {
      const colorValue = this.withWhiteText ? 255 : 0;
      return Array(3).fill(colorValue);
    },
    bgRGB() {
      return (
        this.bgColorHex
          // Normalize the HEX code to pairs
          .replace(/^#([a-f\d])([a-f\d])([a-f\d])$/i, '$1$1$2$2$3$3')
          // Add a comma between pairs
          .replace(/#(.{2})(.{2})(.{2})/, '$1,$2,$3')
          // Split into an array
          .split(',')
          // Convert to decimal (RBG) values
          .map((number) => parseInt(number, 16))
      );
    },
    contrast() {
      // Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
      const textLuminance = this.getLuminance(this.textRGB) + 0.05;
      const bgLuminance = this.getLuminance(this.bgRGB) + 0.05;

      let score = textLuminance / bgLuminance;
      if (bgLuminance > textLuminance) {
        score = 1 / score;
      }

      const level = CONTRAST_LEVELS.find(({ min, max }) => {
        return score >= min && score < max;
      });

      return {
        score: Math.round(score * 10) / 10,
        level,
      };
    },
  },
  methods: {
    getLuminance(rgb) {
      // Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
      const colorWeights = [0.2126, 0.7152, 0.0722];
      return rgb.reduce((acc, color8bit, index) => {
        const color = color8bit / 255;
        const computedColor = color < 0.03928 ? color / 12.92 : ((color + 0.055) / 1.055) ** 2.4;
        return acc + computedColor * colorWeights[index];
      }, 0);
    },
  },
};
</script>

<template>
  <div class="gl-display-inline-block">
    <div
      class="gl-display-inline-block gl-px-3 gl-py-2"
      :class="[`c-border-${name}`, `c-background-${name}`, withWhiteText ? 'f-inverted' : '']"
    >
      Text
    </div>
    <div
      class="gl-display-inline-block gl-px-3 gl-py-2"
      data-testid="contrast-score"
      :class="[`c-border-${name}`, contrast.level.class]"
    >
      {{ contrast.level.grade }} ({{ contrast.score }})
    </div>
  </div>
</template>
