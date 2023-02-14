import path from 'path';
import sass from 'sass';
import webpack from 'webpack';

const isProd = process.env.NODE_ENV === 'production';

const GOOGLE_ANALYTICS_ID = process.env.GOOGLE_ANALYTICS_ID
  ? process.env.GOOGLE_ANALYTICS_ID
  : false;

const GITLAB_UI_URL = (
  process.env.GITLAB_UI_URL || 'https://gitlab-org.gitlab.io/gitlab-ui'
).replace(/\/+$/, '');

const LOOKBOOK_URL = (
  process.env.LOOKBOOK_URL || 'https://gitlab-40159195-main-5zzu3ebmza-ue.a.run.app'
).replace(/\/+$/, '');

if (GOOGLE_ANALYTICS_ID) {
  console.log(`GOOGLE_ANALYTICS_ID found and applied`); // eslint-disable-line no-console
} else {
  console.log(`GOOGLE_ANALYTICS_ID disabled`); // eslint-disable-line no-console
}

const cspPolicies = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cdn.cookielaw.org https://player.vimeo.com",
  "style-src 'self' 'unsafe-inline'",
  "object-src 'none'",
  "img-src 'self' https: data:",
  `frame-src https://www.figma.com https://projects.gitlab.io ${new URL(GITLAB_UI_URL).origin} ${
    new URL(LOOKBOOK_URL).origin
  } https://player.vimeo.com`,
  "connect-src 'self' https://sentry.gitlab.net https://www.google-analytics.com https://cdn.cookielaw.org https://geolocation.onetrust.com  https://gitlab-requests.my.onetrust.com",
];

// eslint-disable-next-line import/no-default-export
export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: (titleChunk) =>
      titleChunk ? `${titleChunk} | Pajamas Design System` : 'Pajamas Design System',
    meta: [
      { charset: 'utf-8' },
      {
        'http-equiv': 'Content-Security-Policy',
        content: cspPolicies.join(';'),
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'gitlab,pajamas,design,system,guidelines' },
      {
        hid: 'description',
        name: 'description',
        content: 'Resources, components, and design guidelines behind GitLab',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@gitlab' },
      { name: 'twitter:title', content: 'Pajamas Design System' },
      {
        name: 'twitter:description',
        content: 'Resources, components, and design guidelines behind GitLab',
      },
      { name: 'twitter:image', content: 'https://design.gitlab.com/img/social/link-preview.png' },
      { name: 'og:url', content: 'https://design.gitlab.com' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'Pajamas Design System' },
      {
        name: 'og:description',
        content: 'Resources, components, and design guidelines behind GitLab',
      },
      { name: 'og:image', content: 'https://design.gitlab.com/img/social/link-preview.png' },
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
    script: [
      {
        src: 'https://cdn.cookielaw.org/consent/7f944245-c5cd-4eed-a90e-dd955adfdd08/OtAutoBlock.js',
      },
      isProd
        ? {
            src: 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js',
            charset: 'UTF-8',
            'data-domain-script': '7f944245-c5cd-4eed-a90e-dd955adfdd08',
          }
        : {},
      {
        hid: 'cookie-banner-callback',
        innerHTML: `
          function OptanonWrapper() {
            if (typeof window.gtagOneTrustCallback == 'function') {
              window.gtagOneTrustCallback();
            }
          }`,
      },
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'cookie-banner-callback': ['innerHTML'],
    },
    bodyAttrs: {
      class: 'ui-indigo',
      tabindex: '-1',
    },
  },

  generate: {
    dir: 'public',
    fallback: 'error.html',
  },

  router: {
    middleware: ['navigation'],
  },

  /*
   ** Pass environment variables to webpack's DefinePlugin
   */
  env: {
    GOOGLE_ANALYTICS_ID,
    GITLAB_UI_URL,
    LOOKBOOK_URL,
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
  plugins: [
    { src: '~/plugins/expose_env_vars.js' },
    { src: '~/plugins/register_global_components.js' },
    GOOGLE_ANALYTICS_ID ? { src: '~/plugins/gtag.js', mode: 'client' } : false,
  ].filter(Boolean),

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@gitlab/nuxt-edit-this-page',
    '@nuxtjs/sentry',
    '~/modules/nuxt_content_extension.js',
    '~/modules/nuxt_lunr_content_bridge.js',
    '@nuxtjs/lunr-module',
    '@nuxt/content',
  ],

  sentry: {
    dsn: 'https://77ebbeb22fb243c786286ecd01caa19f@sentry.gitlab.net/109', // Enter your project's DSN here
    disabled: !isProd,
  },

  /**
   * Edit this page module configuration
   * https://gitlab.com/gitlab-org/frontend/nuxt-edit-this-page
   */
  editThisPage: {
    repo: 'git@gitlab.com:gitlab-org/gitlab-services/design.gitlab.com.git',
  },

  /**
   * Nuxt Content module configuration
   * https://content.nuxtjs.org/
   */
  content: {
    liveEdit: true,
    dir: 'contents',
    markdown: {
      remarkPlugins: ['~~/remark-plugins/mermaid.js'],
    },
  },

  /*
   ** Build configuration
   */
  build: {
    // Per default nuxt doesn't output to the console on CI, this turns this on
    quiet: false,

    // Enabling extractCSS in production ensures that we don't run into CSS ordering issues
    // See https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/issues/418
    extractCSS: isProd,

    postcss: {
      order: ['postcss-preset-env'],
    },

    loaders: {
      imgUrl: {
        limit: false,
      },
      scss: {
        implementation: sass,
        sassOptions: {
          includePaths: [path.resolve(__dirname, 'node_modules')],
        },
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config) {
      config.resolve.alias.vue$ = 'vue/dist/vue.esm.js'; // Full Vue version for being able to use dynamic templates
      config.resolve.alias['bootstrap-vue/src/index'] = 'bootstrap-vue/src/index.scss';

      config.module.rules.splice(0, 1);

      config.module.rules.push({
        test: /\.js$/,
        include: /node-modules/,
        loader: 'babel-loader',
      });

      config.module.rules.push({
        test: /\.vue$/,
        loader: 'vue-loader',
      });

      config.module.rules.push({
        test: /\.css$/,
        include: /node-modules/,
        loader: 'css-loader',
      });

      // Silence webpack warnings about moment/pikaday not being able to resolve.
      // Pikaday is a dependency of gitlab-ui.
      config.plugins.push(new webpack.IgnorePlugin(/moment/, /pikaday/));
    },

    transpile: [
      // GitLab UI needs to be transpiled as it uses some advanced syntax like the
      // optional chaining operator
      '@gitlab/ui',
      'bootstrap-vue',
    ],
  },

  // see https://nuxtjs.org/api/configuration-hooks
  hooks: {},
};
