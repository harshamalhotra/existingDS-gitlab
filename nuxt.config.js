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
        content: 'Design guidelines and UI components for GitLab'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32x32.png',
        sizes: '32x32'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png',
        sizes: '16x16'
      },
      {
        rel: 'stylesheet',
        href: 'https://gitlab-org.gitlab.io/gitlab-ce/application.css'
      }
    ]
  },

  generate: {
    dir: 'public'
  },

  router: {
    mode: 'hash'
  },

  render: {
    ssr: false
  },

  axios: {
    browserBaseURL: '/'
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

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
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '~/modules/content_preparer'
  ],
  /*
   ** Axios module configuration
   */
  serverMiddleware: [],

  /*
   ** Build configuration
   */
  build: {
    watch: ['~/contents'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias.vue$ = 'vue/dist/vue.esm.js' // Full Vue version for being able to use dynamic templates

      config.module.rules.splice(0, 1)

      config.module.rules.push({
        test: /\.md$/,
        include: /static/,
        loader: 'frontmatter-markdown-loader'
      })

      config.module.rules.push({
        test: /\.js$/,
        include: /node-modules/,
        loader: 'babel-loader'
      })

      config.module.rules.push({
        test: /\.md$/,
        loader: 'raw-loader'
      })

      config.module.rules.push({
        test: /\.example\.vue$/,
        loader: 'raw-loader'
      })

      config.module.rules.push({
        test: /\.vue$/,
        exclude: /\.example\.vue$/,
        loader: 'vue-loader'
      })

      config.module.rules.push({
        test: /\.css$/,
        include: /node-modules/,
        loader: 'css-loader'
      })

      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
