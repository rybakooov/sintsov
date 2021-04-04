import scrollTo from '@/utils/scrollTo'

export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    scrollTo(0, {
      elementToScroll: document.querySelector('.os-viewport'),
      speed: 1000,
      easing: (t) => { return 1 + (--t) * t * t * t * t }
    }).then(() => {
      next()
    })
  })

   app.router.afterEach(() => {

   })
}
