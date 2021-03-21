import { Cursor } from '@/scripts/cursor/cursor.js'

const cursor = new Cursor()

export default function (options = {}) {
  if (options.router) {
    options.router.afterEach(() => {
      cursor.reset()
    })
  }
  return {
    bind (el, binding, vnode) {
      cursor.addTarget(el, binding, vnode)
    },
    unbind (el, binding, vnode) {
      cursor.removeTarget(el, binding, vnode)
    },
    update (el, binding, vnode) {
      cursor.updateTarget(el, binding, vnode)
    }
  }
}
