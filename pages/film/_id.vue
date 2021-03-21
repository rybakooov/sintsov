<template>
  <main>
    <section-film-video />
    <section-film-description />
  </main>
</template>

<script>
  import SectionFilmVideo from '@/components/section/film/section-film-video'
  import SectionFilmDescription from '@/components/section/film/section-film-description'

  export default {
    components: {
      SectionFilmVideo,
      SectionFilmDescription
    }
  }
</script>

<style module lang="scss">

</style>
