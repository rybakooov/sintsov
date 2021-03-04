const isDev = process.env.NODE_ENV === 'development'

export default {
  ssr: true,
  globalName: 'app',
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://nuxtjs.org'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'apple-mobile-web-app-title', content: 'IvanSintsovMusic' },
      { name: 'application-name', content: 'IvanSintsovMusic' },
      { name: 'msapplication-TileColor', content: '#ffc40d' },
      { name: 'theme-color', content: '#ffffff' },
      { property: 'og:image', content: './opengraph.png' },
      { name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: 'IvanSintsovMusic' },
      { hid: 'og:description', name: 'og:description', content: 'IvanSintsovMusic — Website' },
      { hid: 'description', name: 'description', content: 'IvanSintsovMusic — Website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: './favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: './favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: './favicon/favicon-16x16.png' },
      { rel: 'manifest', href: './site.webmanifest' },
      { rel: 'mask-icon', href: './favicon/safari-pinned-tab.svg', color: '#5bbad5' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/global.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-i18n'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    publicPath: process.env.PUBLIC_PATH,
    extractCSS: (process.env.EXTRACTCSS === '1' ? true : false),
    extend (config, ctx) {
    },
    loaders: {
      cssModules: {
        modules: {
          localIdentName: isDev ? '[name]_[local]_[hash:base64:2]' : '[hash:base64:8]'
        }
      }
    }
  },
  i18n: require('./configs/i18n.js').default
}
