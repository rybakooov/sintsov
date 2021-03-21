<template>
  <div id="_default">
    <Header />
    <keep-alive>
      <nuxt />
    </keep-alive>
  </div>
</template>

<script>
  import Header from '@/components/common/header'

  export default {
    components: {
      Header
    }
  }
</script>

<style module lang="scss">
</style>
