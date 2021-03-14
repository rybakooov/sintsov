<template>
  <section :class="$style.container">
    <h2 :class="$style.blockTitle">
      <span :class="$style.text">Explore <br>filmography</span>
    </h2>
    <div :class="$style.filter">
      <button :class="$style.item" v-for="(item, i) in [1, 2, 3, 4]" :key="i">
        <span :class="$style.text">2019</span>
      </button>
    </div>
    <div :class="$style.desc">
      <p :class="$style.title">
        <span :class="$style.text">New works are planned <br>to be released in March</span>
      </p>
      <ui-route :class="$style.link" v-for="(item, i) in [1, 2]" :key="i">
        <span :class="$style.text">Kinopoisk</span>
        <icon-arrow-right :class="$style.arrow" />
      </ui-route>
    </div>
    <div :class="$style.slider">
      <div :class="$style.sliderTrack">
        <article :class="$style.film" v-for="(item, i) in [1, 2, 3, 4, 5]" :key="i">
          <div :class="$style.imgbox">
            <img src="http://placehold.it/1120x300" alt="">
          </div>
          <div :class="$style.filmDesc">
            <p :class="$style.filmName">
              <span :class="$style.text">Yellow Cat</span>
            </p>
            <p :class="$style.filmData">
              <span :class="$style.text">Kazakhstan-France, 2020</span>
              <span :class="$style.text">Drama, Criminal</span>
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
  import UiRoute from '@/components/ui/route'
  import IconArrowRight from '@/components/icon/icon-arrow-right'

  export default {
    name: 'SectionLandingProjects',
    components: {
      UiRoute,
      IconArrowRight
    },
    data() {
      return {
        films: [
          {
            title: 'Yellow Cat',
            country: 'Kazakhstan-France',
            year: '2020',
            genre: 'Drama, Criminal'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" module>
  .container {
    @include grid;
    padding: 0 var(--root-layout-offset);
    margin: 16em 0;
    row-gap: 8em;
  }

  .blockTitle {
    grid-column: 1 / 2;
    font-weight: 500;
    text-transform: uppercase;
    .text {
      font-size: 2.2em;
      line-height: 1.2;
    }
  }

  .filter {
    grid-column: 2 / 5;
  }

  .desc {
    grid-column: 1 / 2;
    .title {
      margin-bottom: 4em;
      .text {
        font-size: 1.8em;
        line-height: 1.5;
      }
    }
    .link {
      display: flex;
      align-items: center;
      .text {
        font-size: 14px;
        line-height: 150%;
        color: var(--root-gold);
        margin-right: 0.8em;
      }
      & + .link {
        margin-top: 0.8em;
      }
    }
  }

  .slider {
    grid-column: 2 / 5;
  }
</style>
