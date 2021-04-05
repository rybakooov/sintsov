<template>
  <section :class="$style.container" id="bio">
    <h3 :class="$style.title">
      <span :class="$style.text" v-html="pageData['bio_title_' + this.$root.$i18n.locale]" />
    </h3>
    <div :class="$style.content">
      <article :class="$style.textBlock" v-for="article in pageData.bio_article" :key="article.id">
        <h4 :class="$style.title">
          <span :class="$style.text">{{ article['title_' + $root.$i18n.locale] }}</span>
        </h4>
        <p :class="$style.paragraph">
          {{ article['text_' + $root.$i18n.locale] }}
        </p>
      </article>
    </div>
    <div :class="$style.imgbox">
      <img :src="photoUrl" alt="">
    </div>
  </section>
</template>

<script>
  export default {
    name: 'SectionLandingBio',
    props: {
      pageData: {
        type: Object,
        required: true
      }
    },
    computed: {
      photoUrl() {
        console.log(this.pageData.bio_photo)
        if (this.pageData?.bio_photo?.url) {
          return 'https://sintsov-api.herokuapp.com' + this.pageData.bio_photo.url
        } else {
          return ''
        }
      }
    }
  }
</script>

<style lang="scss" module>
  .container {
    @include grid;
    margin: 16em 0;
    padding: 0 var(--root-layout-offset);
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

  .content {
    grid-column: 2 / 4;
  }

  .textBlock {
    max-width: 54em;
    & + & {
      margin-top: 4em;
    }
    .title {
      margin-bottom: 1.6em;
      text-transform: uppercase;
      color: var(--root-gold);
      .text {
        font-size: 1.2em;
        line-height: 1.2;
      }
    }
    .paragraph {
      font-size: 1.6em;
      line-height: 1.5;
      opacity: 0.75;
    }
  }

  .imgbox {
    grid-column: 4 / 5;
    img {
      width: 100%;
    }
  }
</style>
