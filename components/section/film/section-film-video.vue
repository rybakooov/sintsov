<template>
  <section :class="$style.container">
    <video
      src="https://cdn.videvo.net/videvo_files/video/free/2013-08/small_watermarked/hd0983_preview.webm"
      autoplay
      muted
      loop
    ></video>
  </section>
</template>

<script>
  export default {
    name: 'SectionFilmVideo'
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
