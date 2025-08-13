import withNuxt from "./.nuxt/eslint.config.mjs";
import jestDom from "eslint-plugin-jest-dom";

export default withNuxt({
  ...jestDom.configs["flat/recommended"],
  rules: {
    "vue/v-on-event-hyphenation": "off",
    "vue/attribute-hyphenation": "off",
  },
});
