<template>
  <main v-if="loaded">
    <section-landing-intro :introData="info"/>
    <section-landing-projects />
    <section-landing-bio />
    <section-landing-contacts />
  </main>
  <div v-else>
    LOADING
  </div>
</template>

<script>
  import SectionLandingIntro from '@/components/section/landing/section-landing-intro'
  import SectionLandingProjects from '@/components/section/landing/section-landing-projects'
  import SectionLandingBio from '@/components/section/landing/section-landing-bio'
  import SectionLandingContacts from '@/components/section/landing/section-landing-contacts'

  export default {
    components: {
      SectionLandingIntro,
      SectionLandingProjects,
      SectionLandingBio,
      SectionLandingContacts
    },
    data() {
      return {
        info: {},
        loaded: false
      }
    },
    methods: {
      async fetchSomething() {
        const data = await this.$axios.$get('https://sintsov-api.herokuapp.com/index')
        this.info = data
        this.loaded = true
      }
    },
    mounted() {
      this.fetchSomething()
    }
  }
</script>

<style lang="scss" module></style>
