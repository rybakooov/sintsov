<template>
  <main>
    <section-film-video :video="pageData.video" />
    <section-film-description :page-data="pageData" />
  </main>
</template>

<script>
  import SectionFilmVideo from '@/components/section/film/section-film-video'
  import SectionFilmDescription from '@/components/section/film/section-film-description'
  import pageTransition from '@/mixins/pageTransition'

  export default {
    mixins: [pageTransition()],
    components: {
      SectionFilmVideo,
      SectionFilmDescription
    },
    data() {
      return {
        pageData: {}
      }
    },
    async fetch() {
      this.pageData = await this.$axios.$get('https://sintsov-api.herokuapp.com/films/' + this.$route.params.id)
    }
  }
</script>

<style module lang="scss">

</style>
