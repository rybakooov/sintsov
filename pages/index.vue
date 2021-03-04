<template>
  <div class="container">
    <Header />
    <main :class="$style.main">
      <section-landing-intro />
      <section-landing-slider />
      <section-landing-bio />
      <section-landing-contacts />
    </main>
  </div>
</template>

<script>
  import Header from '@/components/common/header'
  import SectionLandingIntro from '@/components/section/landing/section-landing-intro'
  import SectionLandingSlider from '@/components/section/landing/section-landing-slider'
  import SectionLandingBio from '@/components/section/landing/section-landing-bio'
  import SectionLandingContacts from '@/components/section/landing/section-landing-contacts'

  export default {
    components: {
      Header,
      SectionLandingIntro,
      SectionLandingSlider,
      SectionLandingBio,
      SectionLandingContacts
    }
  }
</script>

<style lang="scss" module>
  .main {

  }
</style>
