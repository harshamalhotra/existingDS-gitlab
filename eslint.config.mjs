import withNuxt from "./.nuxt/eslint.config.mjs";
import jestDom from "eslint-plugin-jest-dom";

export default withNuxt({
  ...jestDom.configs["flat/recommended"],
});
