<template>
  <main>
    <section-landing-intro />
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
        info: {}
      }
    }
    // methods: {
    //   async fetchSomething() {
    //     const data = await this.$axios.$get('http://localhost:1337/index')
    //     this.info = data
    //   }
    // },
    // created() {
    //   this.fetchSomething()
    // }
  }
</script>

<style lang="scss" module></style>
