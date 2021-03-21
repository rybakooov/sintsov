<template>
  <main>
    <section-landing-intro :page-data="pageData"/>
    <section-landing-projects />
    <section-landing-bio />
    <section-landing-contacts />
  </main>
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
        pageData: {}
      }
    },
    async fetch() {
      this.pageData = await this.$axios.$get('https://sintsov-api.herokuapp.com/index')
    }
  }
</script>

<style lang="scss" module></style>
