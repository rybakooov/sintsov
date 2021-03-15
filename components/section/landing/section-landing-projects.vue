<template>
  <section :class="[$style.scroll, {[$style.scroll_bottom]: isBottom}]" ref="scroll" :style="scrollStyle">
    <pre style="position: fixed;
top: 0;
left: 0;
font-size: 24px">
      {{ isFixed }}
      {{ sliderOffset }}
    </pre>
    <div :class="containerClasses" ref="container">
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
        <div :class="$style.sliderTrack" :style="styleSlider">
          <article :class="$style.film" v-for="(item, i) in films" :key="i" ref="film">
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
    </div>
    <resize-observer @notify="onResize" />
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
        films: [1, 2, 3, 4, 5],
        visibleFilms: 3,
        sliderOffset: 0,
        marginLeft: 24,
        scrollHeight: 0,
        windowHeight: 0,
        scrollBlockPos: 0,
        containerHeight: 0,
        pageYOffset: 0,
        isFixed: false,
        cachedY: 0,
        transformY: 0,
        destinationX: 0,
        isBottom: false,
        raf: null
      }
    },
    mounted() {
      this.onResize()
      this.onScroll()
      document.addEventListener('scroll', this.onScroll)
      this.raf = window.requestAnimationFrame(this.setTranform)
    },
    computed: {
      containerClasses () {
        return [this.$style.container, { [this.$style.container_fixed]: this.isFixed }]
      },
      scrollStyle () {
        return {
          height: `${this.scrollHeight}px`
        }
      },
      styleSlider () {
        return {
          transform: `translateX(${this.destinationX}px)`
        }
      }
    },
    methods: {
      setSliderOffset() {
        this.sliderOffset = (this.$refs.film[this.$refs.film.length - 1].offsetWidth + this.marginLeft) * (this.films.length - this.visibleFilms) - this.marginLeft
      },
      setScrollHeight() {
        this.scrollHeight = this.$refs.container.clientHeight + this.sliderOffset
      },
      onResize() {
        try {
          this.setSliderOffset()
          this.setScrollHeight()
          this.windowHeight = window.innerHeight
          this.containerHeight = this.$refs.container.clientHeight
          this.scrollBlockPos = this.$refs.scroll.getBoundingClientRect()
        } catch (e) {}
      },
      onScroll() {
        try {
          this.scrollBlockPos = this.$refs.scroll.getBoundingClientRect()
          this.deltaY = -(window.pageYOffset - this.cachedY)
          this.cachedY = window.pageYOffset
          this.checkContainerStatus()
        } catch (e) {}
      },
      checkContainerStatus() {
        if (this.scrollBlockPos.y + this.containerHeight / 2 > this.windowHeight / 2) {
          this.isFixed = false
          this.isBottom = false
          // Задать верхний трансформ (0)
          this.transformY = 0
        } else if (this.scrollBlockPos.y + this.$refs.scroll.clientHeight - (this.containerHeight / 2) < this.windowHeight / 2) {
          this.isFixed = false
          this.isBottom = true
          // Задать нижний трансформ
          this.transformY = -this.sliderOffset
        } else {
          this.isFixed = true
          this.isBottom = false
          // Задать Текущий трансформ
          this.transformY += this.deltaY
        }
      },
      setTranform() {
        this.destinationX += 0.2 * (this.transformY - this.destinationX)
        window.requestAnimationFrame(this.setTranform)
      }
    },
    beforeDestroy() {
      window.cancelAnimationFrame(this.raf)
    }
  }
</script>

<style lang="scss" module>
  .scroll {
    margin: 16em 0;
    &_bottom {
      display: flex;
      align-items: flex-end;
    }
  }

  .container {
    @include grid;
    padding: 0 var(--root-layout-offset);
    row-gap: 8em;
    overflow: hidden;
    min-height: 0;  /* NEW */
    min-width: 0;   /* NEW; needed for Firefox */
    &_fixed {
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
    }
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
    position: relative;
    z-index: 2;
    background-color: #fff;
    &:after, &:before {
      content: '';
      background-color: #fff;
      height: 100%;
      display: block;
      position: absolute;
      top: 0;
      z-index: 2;
    }
    &:after {
      left: 100%;
      width: 2.4em;
    }
    &:before {
      right: 100%;
      width: var(--root-layout-offset);
    }
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
    grid-column: 2 / 3;
    //overflow: hidden;  /* NEW */
    min-width: 0;      /* NEW; needed for Firefox */
  }

  .sliderTrack {
    display: flex;
    width: 100%;
    grid-row: 1 / 2;
  }

  .film {
    width: 100%;
    flex-shrink: 0;
    & + & {
      margin-left: 2.4em;
    }
  }

  .imgbox {
    padding-bottom: 140%;
    position: relative;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
    }
  }
  .filmDesc {
    margin-top: 2.4em;
  }

  .filmName {
    .text {
      font-size: 3em;
      line-height: 1.2;
    }
  }

  .filmData {
    margin-top: .8em;
    color: var(--root-light-black);
    .text {
      font-size: 1.4em;
      line-height: 1.5;
    }
  }
</style>
