<template>
  <section :class="$style.container">
    <video
      :src="videoUrl"
      autoplay
      muted
      loop
    ></video>
  </section>
</template>

<script>
  export default {
    name: 'SectionFilmVideo',
    props: {
      id: {
        
      },
      video: {
        type: Object,
        default: () => {}
      }
    },
    computed: {
      videoUrl () {
        if (this.video?.url) {
          return 'https://sintsov-api.herokuapp.com' + this.video.url
        } else {
          return ''
        }
      }
    }
  }
</script>

<style module lang="scss">
  .container {
    height: 64em;
    margin: 0 var(--root-layout-offset);
    position: relative;
    overflow: hidden;
    video {
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
