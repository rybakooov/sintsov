<template>
  <section :class="$style.container" id="contacts">
    <h3 :class="$style.title">
      <span :class="$style.text">
        contact
      </span>
    </h3>
    <div :class="$style.links">
      <ui-route :class="$style.email" href="info@ivansintsovmusic.com">
        <span :class="$style.text">info@ivansintsovmusic.com</span>
      </ui-route>
      <ui-route :class="$style.link" v-for="(item, i) in [1, 2]" :key="i">
        <span :class="$style.text">Kinopoisk</span>
        <icon-arrow-right :class="$style.arrow" />
      </ui-route>
    </div>
  </section>
</template>

<script>
  import UiRoute from '@/components/ui/route/index'
  import IconArrowRight from '@/components/icon/icon-arrow-right'

  export default {
    name: 'SectionLandingContacts',
    components: {
      UiRoute,
      IconArrowRight
    }
  }
</script>

<style lang="scss" module>
  .container {
    @include grid;
    margin: 16em 0 0;
    padding: 0 var(--root-layout-offset) 8em;
  }

  .title {
    grid-column: 1 / 2;
    text-transform: uppercase;
    font-weight: 500;
    .text {
      font-size: 2.2em;
      line-height: 1.2;
    }
  }

  .links {
    grid-column: 4 / 5;
    .email {
      color: #000000;
      margin-bottom: 1.6em;
      display: block;
      opacity: 0.75;
      .text {
        font-size: 1.6em;
        line-height: 1.5;
      }
    }
  }

  .link {
    display: flex;
    align-items: center;
    color: var(--root-gold);
    .text {
      font-size: 1.4em;
      line-height: 1.5;
    }
    & + .link {
      margin-top: 1.6em;
    }
  }
  .arrow {
    width: 4em;
    height: auto;
    margin-left: 0.8em;
  }
</style>
