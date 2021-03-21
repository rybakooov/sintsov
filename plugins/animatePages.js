// const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
// const cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame
//
// let raf
//
// function scrollToTop() {
//   document.body.scrollTop = window.pageYOffset + 0.2 * (-window.pageYOffset)
//   console.log('raf')
// }
//
// // export default ({ app }) => {
// //   app.router.beforeEach((to, from, next) => {
// //     // console.log(window)
// //     // raf = requestAnimationFrame(scrollTop)
// //   })
// //  app.router.afterEach(() => {
// //    // console.log(raf)
// //    // cancelAnimationFrame(raf)
// //  })
// // }
//
// export default ({ app }) => {
//   app.router.beforeEach((to, from, next) => {
//     console.log(window.pageYOffset)
//     function pop() {
//       while (window.pageYOffset > 10) {
//         requestAnimationFrame(scrollToTop)
//       }
//     }
//     pop()
//
//     next()
//   })
//
//    app.router.afterEach(() => {
//      cancelAnimationFrame(raf)
//    })
// }
