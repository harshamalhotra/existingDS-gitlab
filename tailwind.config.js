import tailwindDefaults from "@gitlab/ui/tailwind.defaults";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [tailwindDefaults],
  corePlugins: {
    /*
     * Disable preflight styles so that `@tailwind base` compiles to CSS vars declarations without
     * any of the resets which we don't need.
     * More on this at https://tailwindcss.com/docs/preflight.
     */
    preflight: true,
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
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
  safelist: ["h-full", "bg-white"],
};
