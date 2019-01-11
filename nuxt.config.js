import postCssGitlab from './modules/postcss_gitlab';
import { getContentList } from './modules/content_preparer';

const routes = getContentList('components').map(c => `components/${c.id}`);

module.exports = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'GitLab Design System',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Design guidelines and UI components for GitLab',
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
      {
        src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
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

  render: {
    ssr: false,
  },

  axios: {
    browserBaseURL: '/',
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

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
  ],
  /*
   ** Axios module configuration
   */
  serverMiddleware: [],

  watch: ['~/contents/'],

  /*
   ** Build configuration
   */
  build: {
    watch: ['~/contents'],

    postcss: {
      plugins: [postCssGitlab({ scopeSelector: 'app-styles' })],
      order: ['postcss-gitlab', 'postcss-import', 'postcss-preset-env'],
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias.vue$ = 'vue/dist/vue.esm.js'; // Full Vue version for being able to use dynamic templates

      config.module.rules.splice(0, 1);

      const sassRule = config.module.rules.find(rule => rule.test.toString().indexOf('.scss') > -1);

      const cssSassLoader = sassRule.oneOf[1].use[1];
      // This turns off the check for the failing imports on the live imported application.css
      cssSassLoader.options.url = false;

      config.module.rules.push({
        test: /\.md$/,
        include: /static/,
        loader: 'frontmatter-markdown-loader',
      });

      config.module.rules.push({
        test: /\.js$/,
        include: /node-modules/,
        loader: 'babel-loader',
      });

      config.module.rules.push({
        test: /\.md$/,
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
