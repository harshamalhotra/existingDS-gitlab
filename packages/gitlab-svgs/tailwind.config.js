const tailwindDefaults = require('@gitlab/ui/tailwind.defaults');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './svgpreviewer/components/**/*.{vue,js}',
    './svgpreviewer/layouts/**/*.vue',
    './svgpreviewer/pages/**/*.vue',
    './node_modules/@gitlab/ui/src/**/*.{vue,js}',
  ],
  presets: [tailwindDefaults],
};
