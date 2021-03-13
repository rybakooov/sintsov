<template>
  <a :class="$style.uiRoute" v-if="href" :href="href" rel="noopener" target="_blank"><slot /></a>
  <router-link :class="$style.uiRoute" v-else-if="to" :to="routeTo"><slot /></router-link>
  <span :class="$style.uiRoute" v-else><slot /></span>
</template>

<script>
export default {
  name: 'UiRoute',
  props: {
    href: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  },
  computed: {
    routeTo () {
      return this.$i18n.createPath(this.to)
    }
  }
}
</script>

<style lang="scss" module>
.uiRoute {
  position: relative;
  &[disabled] {
    pointer-events: none;
  }
}
</style>
