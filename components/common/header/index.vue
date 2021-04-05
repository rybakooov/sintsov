<template>
  <header :class="$style.container">
    <div :class="$style.lang">
      <a v-for="(locale, i) in locales" v-cursor="{ icon: 'arrow', size: 1 }" :key="i" :disabled="isDisabled(locale.code)" :href="changeLocaleHref(locale.code)" :class="$style.langLink">
        <span :class="$style.text">{{ locale.code }}</span>
      </a>
    </div>
    <ui-route to="/" :class="$style.logo" v-cursor="{ icon: 'arrow', size: 1 }">Ivan<br />Sintsov</ui-route>
    <nav :class="$style.nav">
      <ui-route v-for="link in links" :key="link.title" :class="$style.navLink" :to="'/' + link.hash" v-cursor="{ text: link.title }" @click.native="scrollToAnchors(link.hash)">
        <span :class="$style.text">{{ link.title }}</span>
      </ui-route>
    </nav>
  </header>
</template>

<script>
  import UiRoute from '@/components/ui/route'
  import scrollTo from '@/utils/scrollTo'

  export default {
    name: 'Header',
    components: {
      UiRoute
    },
    data() {
      return {
        links: [
          {
            title: 'Bio',
            hash: '#bio'
          },
          {
            title: 'Projects',
            hash: '#projects'
          },
          {
            title: 'Contacts',
            hash: '#contacts'
          }
        ]
      }
    },
    computed: {
      locales() {
        return this.$root.$i18n.locales
      }
    },
    methods: {
      changeLocaleHref(code) {
        return this.$i18n.createPath(this.$route.path, code)
      },
      isDisabled(code) {
        return code === this.$root.$i18n.locale
      },
      scrollToAnchors(id) {
        const el = document.querySelector(id)
        if (el) {
          scrollTo(el, {
            elementToScroll: document.querySelector('.os-viewport'),
            speed: 2000,
            verticalOffset: -160,
            easing: (t) => {
              return 1 + (--t) * t * t * t * t
            }
          }).then(() => {
            // next()
          })
        }
      }
    }
  }
</script>

<style lang="scss" module>
  .container {
    padding: 2.4em 22em 2em;
    display: flex;
    align-items: center;
  }

  .lang {
    display: flex;
    flex: 1 0;
  }

  .langLink {
    display: block;
    text-transform: capitalize;
    color: var(--root-light-black);
    .text {
      font-size: 1.4em;
      line-height: 1.35;
    }
    & + & {
      margin-left: 2.4em;
    }
    &[disabled] {
      color: var(--root-black);
      pointer-events: none;
    }
  }

  .logo {
    font-size: 1.8em;
    line-height: 1;
    font-weight: 500;
    text-align: center;
    color: var(--root-gold);
    text-transform: uppercase;
  }

  .nav {
    display: flex;
    flex: 1 0;
    align-items: center;
    justify-content: flex-end;
  }

  .navLink {
    color: var(--root-light-black);
    transition: opacity .3s;
    .text {
      font-size: 1.4em;
      line-height: 1.35;
    }
    & + & {
      margin-left: 2.4em;
    }
    &:hover {
      @media screen and (min-width: 1024px) {
        opacity: 0;
      }
    }
  }
</style>
