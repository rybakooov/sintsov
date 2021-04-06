<template>
  <div id="_default">
    <Header />
    <keep-alive>
      <nuxt />
    </keep-alive>
    <resize-observer @notify="onResize" />
  </div>
</template>

<script>
  import Header from '@/components/common/header'
  import isPrerender from '../utils/isPrerender'

  export default {
    components: {
      Header
    },
    data() {
      return {
        viewportHeight: 0,
        general: {}
      }
    },
    computed: {
      appStyle() {
        return {
          '--vh': this.$isServer ? '1vh' : isPrerender() ? '1vh' : `${this.viewportHeight / 100}px`
        }
      }
    },
    methods: {
      onResize() {
        this.viewportHeight = window.innerHeight
      }
    }
  }
</script>

<style module lang="scss">
.scroll {
  height: 100vh;
}
</style>
