import glob from 'glob';
import path from 'path';
import postCssGitlab from './modules/postcss_gitlab';
import { getContentList } from './modules/content_preparer';

const routes = [
  ...getContentList('components').map(c => `components/${c.id}`),
  ...glob.sync('**/*.md', { cwd: 'contents/' }).map(filePath => filePath.replace(/\.md$/, '')),
];

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Pajamas Design System',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Resources, components, and design guidelines behind GitLab',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png',
        sizes: '16x16',
      },
    ],
    bodyAttrs: {
      class: 'ui-indigo',
    },
  },

  generate: {
    dir: 'public',
    routes,
  },

  axios: {
    browserBaseURL: '/',
  },

  /*
   ** Customize the progress-bar color
   */
  loading: false,

  /*
   ** Global CSS
   */
  css: ['../assets/stylesheets/app.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/gitlab-ui.js', ssr: false }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '~/modules/content_preparer',
    '@gitlab/nuxt-edit-this-page',
  ],

  /**
   * Edit this page module configuration
   * https://gitlab.com/gitlab-org/frontend/nuxt-edit-this-page
   */
  editThisPage: {
    repo: 'git@gitlab.com:gitlab-org/gitlab-services/design.gitlab.com.git',
  },

  /*
   ** Axios module configuration
   */
  serverMiddleware: [],

  watch: ['~/contents/'],

  /*
   ** Build configuration
   */
  build: {
    // Per default nuxt doesn't output to the console on CI, this turns this on
    quiet: false,

    watch: ['~/contents'],

    postcss: {
      plugins: [postCssGitlab({ scopeSelector: 'app-styles' })],
      order: ['postcss-gitlab', 'postcss-import', 'postcss-preset-env'],
    },

    loaders: {
      scss: { includePaths: [path.resolve(__dirname, 'node_modules')] },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias.vue$ = 'vue/dist/vue.esm.js'; // Full Vue version for being able to use dynamic templates

      config.module.rules.splice(0, 1);

      config.module.rules.push({
        test: /\.md$/,
        include: /static/,
        loader: 'frontmatter-markdown-loader',
      });

      config.module.rules.push({
        test: /\.md$/,
        include: /contents/,
        loader: 'frontmatter-markdown-loader',
      });

      config.module.rules.push({
        test: /\.js$/,
        include: /node-modules/,
        loader: 'babel-loader',
      });

      config.module.rules.push({
        test: /\.md$/,
        exclude: /contents/,
        loader: 'raw-loader',
      });

      config.module.rules.push({
        test: /\.example\.vue$/,
        loader: 'raw-loader',
      });

      config.module.rules.push({
        test: /\.vue$/,
        exclude: /\.example\.vue$/,
        loader: 'vue-loader',
      });

      config.module.rules.push({
        test: /\.css$/,
        include: /node-modules/,
        loader: 'css-loader',
      });

      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
