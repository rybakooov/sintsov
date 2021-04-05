<template>
  <section :class="$style.container">
    <aside :class="$style.aside">
      <p :class="$style.text">
        {{ pageData['where_' + $root.$i18n.locale] }}, {{ pageData.year }}<br>
        {{ pageData['genre_' + $root.$i18n.locale] }}
      </p>
    </aside>
    <article :class="$style.content">
      <h1 :class="$style.title"><span :class="$style.text">{{ pageData['title_' + $root.$i18n.locale] }}</span></h1>
      <div :class="$style.desc">
        <p :class="$style.text">
          {{ pageData['description_' + $root.$i18n.locale] }}
        </p>
      </div>
      <div :class="$style.awwards">
        <p :class="$style.text">
          {{ pageData['award_' + $root.$i18n.locale] }}
        </p>
      </div>
    </article>
  </section>
</template>

<script>
  export default {
    name: 'SectionFilmDescription',
    props: {
      pageData: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>

<style module lang="scss">
  .container {
    @include grid;
    padding: 4em var(--root-layout-offset) 8em;
  }

  .aside {
    grid-column: 1 / 2;
    color: var(--root-light-black);
    .text {
      font-size: 1.4em;
      line-height: 1.5;
    }
  }

  .content {
    grid-column: 3 / 5;
    .title {
      font-family: 'Todes Normal';
      font-weight: normal;
      .text {
        font-size: 3em;
        line-height: 1.2;
      }
    }
    .desc {
      margin: 1.6em 0 4em;
      max-width: 64em;
      color: var(--root-about-black);
      opacity: 0.75;
      .text {
        font-size: 1.6em;
        line-height: 1.5;
      }
    }
    .awwards {
      color: var(--root-gold);
      opacity: 0.75;
      .text {
        font-size: 1.6em;
        line-height: 1.5;
      }
    }
  }
</style>
