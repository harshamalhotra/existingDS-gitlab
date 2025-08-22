const tailwindDefaults = require('./packages/gitlab-ui/tailwind.defaults');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './contents/**/*.md',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    // Scan GitLab UI's own assets
    './packages/gitlab-ui/src/**/*.{vue,js}',
    // Ignore specs and stories
    '!./packages/gitlab-ui/src/**/*.{spec,stories}.js',
    // Ignore all node_modules
    '!./**/node_modules/**',
  ],
  presets: [tailwindDefaults],
};
