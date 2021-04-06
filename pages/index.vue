<template>
  <main>
    <section-landing-intro :page-data="pageData"/>
    <section-landing-projects :general="general" :films="films" />
    <section-landing-bio :page-data="pageData" />
    <section-landing-contacts :general="general" />
  </main>
</template>

<script>
  import SectionLandingIntro from '@/components/section/landing/section-landing-intro'
  import SectionLandingProjects from '@/components/section/landing/section-landing-projects'
  import SectionLandingBio from '@/components/section/landing/section-landing-bio'
  import SectionLandingContacts from '@/components/section/landing/section-landing-contacts'
  import pageTransition from '@/mixins/pageTransition'

  export default {
    mixins: [pageTransition()],
    components: {
      SectionLandingIntro,
      SectionLandingProjects,
      SectionLandingBio,
      SectionLandingContacts
    },
    data() {
      return {
        pageData: {},
        general: {},
        films: []
      }
    },
    async fetch() {
      this.pageData = await this.$axios.$get('https://sintsov-api.herokuapp.com/index')
      this.films = await this.$axios.$get('https://sintsov-api.herokuapp.com/films')
      this.general = await this.$axios.$get('https://sintsov-api.herokuapp.com/general')
    }
  }
</script>

<style lang="scss" module></style>
