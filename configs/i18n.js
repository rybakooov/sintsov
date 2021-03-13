// https://i18n.nuxtjs.org/setup
export default {
  strategy: 'prefix_except_default',
  locales: [
    {
      code: 'ru',
      name: 'Русский',
      key: 'ru'
    },
    {
      code: 'en',
      name: 'English',
      key: 'en-us'
    }
  ],
  defaultLocale: 'ru',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'lang',
    onlyOnRoot: true // recommended
  },
  vueI18n: {
    fallbackLocale: 'en',
    silentTranslationWarn: true,
    messages: {
      en: require('../assets/translates/en').default,
      ru: require('../assets/translates/ru').default
    }
  }
}
