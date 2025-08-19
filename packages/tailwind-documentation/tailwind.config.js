import tailwindDefaults from "../gitlab-ui/tailwind.defaults";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [tailwindDefaults],
  corePlugins: {
    preflight: true,
    ringOffsetColor: true,
    ringOpacity: true,
    ringWidth: true,
    ringColor: true,
    ringOffsetWidth: true,
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./content/**/*.md",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    ringColor: ({ theme }) => ({
      ...theme("colors"),
    }),
    outlineColor: ({ theme }) => ({
      ...theme("colors"),
    }),
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
  safelist: ["h-full", "bg-white"],
};
