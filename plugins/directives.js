import Vue from 'vue'
import cursor from '@/directives/cursor'

export default ({ app }) => {
  Vue.directive('cursor', cursor({
    router: app.router
  }))
}
