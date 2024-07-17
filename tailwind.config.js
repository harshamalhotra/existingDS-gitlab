const tailwindDefaults = require('@gitlab/ui/tailwind.defaults');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './contents/**/*.md',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    // Scan GitLab UI's own assets
    './node_modules/@gitlab/ui/dist/**/*.js',
  ],
  presets: [tailwindDefaults],
};
