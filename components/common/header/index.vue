<template>
  <header :class="$style.container">
    <div :class="$style.lang">
      <a v-for="(locale, i) in locales" :key="i" :disabled="isDisabled(locale.code)" :href="changeLocaleHref(locale.code)" :class="$style.langLink">
        <span :class="$style.text">{{ locale.code }}</span>
      </a>
    </div>
    <ui-route to="/" :class="$style.logo">Ivan<br />Sintsov</ui-route>
    <nav :class="$style.nav">
      <ui-route v-for="link in links" :key="link.title" :class="$style.navLink" :to="'/' + link.hash">
        <span :class="$style.text">{{ link.title }}</span>
      </ui-route>
    </nav>
  </header>
</template>

<script>
  import UiRoute from '@/components/ui/route'

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
      }
    }
  }
</script>

<style lang="scss" module>
  .container {
    padding: 2.4em 22em;
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
    .text {
      font-size: 1.4em;
      line-height: 1.35;
    }
    & + & {
      margin-left: 2.4em;
    }
    &[disabled] {
      pointer-events: none;
      color: var(--root-light-black);
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
    .text {
      font-size: 1.4em;
      line-height: 1.35;
    }
    & + & {
      margin-left: 2.4em;
    }
  }
</style>
