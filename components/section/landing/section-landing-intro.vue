<template>
  <section :class="$style.container">
    <h1 :class="$style.title">
      <span :class="$style.text" v-html="pageData['title_' + this.$root.$i18n.locale]" />
    </h1>
    <figure :class="$style.figure">
      <blockquote :class="$style.blockquote">
        <p :class="$style.text" v-html="pageData['quote_' + this.$root.$i18n.locale]" />
      </blockquote>
      <figcaption :class="$style.author">
        <span :class="$style.text" v-html="pageData['author_' + this.$root.$i18n.locale]" />
      </figcaption>
    </figure>
  </section>
</template>

<script>
  export default {
    name: 'SectionLandingIntro',
    props: {
      pageData: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" module>
  .container {
    @include grid;
    padding: 0 var(--root-layout-offset);
    margin-bottom: 16em;
  }

  .title {
    font-size: 1em;
    font-family: 'Todes Normal';
    font-weight: normal;
    text-align: center;
    text-transform: uppercase;
    display: block;
    margin: 14em auto 8em;
    grid-column: 1 / 5;
    .text {
      font-size: 9.8em;
      line-height: 1.1;
      span {
        color: var(--root-gold);
      }
    }
  }

  .figure {
    grid-column: 3 / 5;
    max-width: 58.8em;
  }

  .blockquote {
    opacity: 0.75;
    margin-bottom: 4em;
    .text {
      font-size: 2.2em;
      line-height: 1.5;
    }
  }

  .author {
    color: var(--root-light-black);
    .text {
      font-size: 1.4em;
      line-height: 1.5;
    }
  }
</style>
