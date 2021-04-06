import scrollTo from '@/utils/scrollTo'

export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    if (from.name) {
      scrollTo(0, {
        elementToScroll: document.querySelector('.os-viewport'),
        speed: 2000,
        easing: (t) => {
          return 1 + (--t) * t * t * t * t
        }
      }).then(() => {
        next()
      })
    } else {
      next()
    }
  })

   app.router.afterEach((to) => {
     if (to.hash !== '') {
       setTimeout(() => {
         scrollTo(document.querySelector(to.hash), {
           elementToScroll: document.querySelector('.os-viewport'),
           speed: 2000,
           verticalOffset: -160,
           easing: (t) => {
             return 1 + (--t) * t * t * t * t
           }
         })
       }, 2000)
     }
   })
}
