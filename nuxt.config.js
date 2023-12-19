import path from 'path';
import sass from 'sass';
import webpack from 'webpack';
import { buildMeta, getAbsoluteURI, titleTemplate } from './helpers/seo';
import fixUrlInReviewApp from './helpers/fix_url_in_review_app';

const isProd = process.env.NODE_ENV === 'production';

const GITLAB_ANALYTICS_ID = process.env.GITLAB_ANALYTICS_ID ?? false;
const GITLAB_ANALYTICS_URL = GITLAB_ANALYTICS_ID
  ? 'https://collector.prod-1.gl-product-analytics.com'
  : '';

const CI_ENVIRONMENT_URL = process.env.CI_ENVIRONMENT_URL || false;

const GITLAB_UI_URL = (
  process.env.GITLAB_UI_URL || 'https://gitlab-org.gitlab.io/gitlab-ui'
).replace(/\/+$/, '');

const LOOKBOOK_URL = (
  process.env.LOOKBOOK_URL || 'https://gitlab-40159195-main-5zzu3ebmza-ue.a.run.app/lookbook'
).replace(/\/+$/, '');

if (GITLAB_ANALYTICS_ID) {
  console.log(`GITLAB_ANALYTICS_ID found and applied. Sending events to ${GITLAB_ANALYTICS_URL}`); // eslint-disable-line no-console
} else {
  console.log(`GITLAB_ANALYTICS_ID disabled`); // eslint-disable-line no-console
}

const cspPolicies = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' 'unsafe-eval' ${GITLAB_ANALYTICS_URL} https://cdn.cookielaw.org https://player.vimeo.com ${
    new URL(LOOKBOOK_URL).origin
  }`,
  "style-src 'self' 'unsafe-inline'",
  "object-src 'none'",
  "img-src 'self' https: data:",
  `frame-src https://www.figma.com https://projects.gitlab.io ${new URL(GITLAB_UI_URL).origin} ${
    new URL(LOOKBOOK_URL).origin
  } https://player.vimeo.com`,
  `connect-src 'self' https://sentry.gitlab.net ${GITLAB_ANALYTICS_URL} https://cdn.cookielaw.org https://geolocation.onetrust.com  https://gitlab-requests.my.onetrust.com`,
];

// eslint-disable-next-line import/no-default-export
export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate,
    meta: [
      { charset: 'utf-8' },
      {
        'http-equiv': 'Content-Security-Policy',
        content: cspPolicies.join(';'),
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'gitlab,pajamas,design,system,guidelines' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@gitlab' },
      { name: 'twitter:image', content: getAbsoluteURI('/img/social/link-preview.png') },
      { name: 'og:type', content: 'website' },
      { name: 'og:image', content: getAbsoluteURI('/img/social/link-preview.png') },
      ...buildMeta(),
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: fixUrlInReviewApp('/favicon.ico') },
      {
        rel: 'icon',
        type: 'image/png',
        href: fixUrlInReviewApp('/favicon-32x32.png'),
        sizes: '32x32',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: fixUrlInReviewApp('/favicon-16x16.png'),
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
      {
        src: `${LOOKBOOK_URL}/../lookbook-assets/js/lookbook-core.js`,
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
    base: CI_ENVIRONMENT_URL ? new URL(CI_ENVIRONMENT_URL).pathname : '/',
  },

  /*
   ** Pass environment variables to webpack's DefinePlugin
   */
  env: {
    GITLAB_ANALYTICS_URL,
    GITLAB_ANALYTICS_ID,
    GITLAB_UI_URL,
    LOOKBOOK_URL,
    CI_ENVIRONMENT_URL,
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
    GITLAB_ANALYTICS_ID ? { src: '~/plugins/analytics.js', mode: 'client' } : false,
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
      remarkPlugins: ['~~/nuxt-content-plugins/mermaid.js'],
      rehypePlugins: ['~~/nuxt-content-plugins/fix_review_urls.js'],
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
        options: {
          // https://vue-loader.vuejs.org/options.html#prettify
          prettify: false,
        },
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
      'mermaid',
    ],
  },

  // see https://nuxtjs.org/api/configuration-hooks
  hooks: {
    /*
    If one defines `base` in the nuxt config, nuxt also adds a
    <base> element which messes with anchor links. See also:
    https://github.com/nuxt/content/issues/376
    https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/1754
    */
    'vue-renderer:ssr:templateParams': (params) => {
      params.HEAD = params.HEAD.replace(/<base.+?>/, '');
    },
  },

  vue: {
    config: {
      ignoredElements: [/^lookbook-embed/],
    },
  },
};
