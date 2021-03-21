export default {
  trailingSlash: false,
  scrollBehavior (to, from, savedPosition) {
    console.log(1)
    return { x: 0, y: 0 }
  }
}
