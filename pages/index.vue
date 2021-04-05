<template>
  <main>
    <section-landing-intro :page-data="pageData"/>
    <section-landing-projects :films="films" />
    <section-landing-bio :page-data="pageData"/>
    <section-landing-contacts />
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
        films: []
      }
    },
    async fetch() {
      this.pageData = await this.$axios.$get('https://sintsov-api.herokuapp.com/index')
      this.films = await this.$axios.$get('https://sintsov-api.herokuapp.com/films')
    }
  }
</script>

<style lang="scss" module></style>
