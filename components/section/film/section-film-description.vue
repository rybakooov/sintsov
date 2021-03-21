<template>
  <section :class="$style.container">
    <aside :class="$style.aside">
      <p :class="$style.text">
        Japan, 2019<br>
        Melodrama, Drama, History
      </p>
    </aside>
    <article :class="$style.content">
      <h1 :class="$style.title"><span :class="$style.text">Sorokin no Mita Sakura</span></h1>
      <div :class="$style.desc">
        <p :class="$style.text">
          Sakurako works as an assistant at a television studio in Matsuyama, her first independent task is to shoot a story about the local cemetery of Russian prisoners of war and their life during the Russo-Japanese War. But to study additional materials, you will have to go to Russia. The girl is not particularly enthusiastic about the project; maybe she would have refused - if not for the grandmother who handed Sakurako the diary of her great-great-grandmother Yui. Yui was a nurse in a POW camp; She entrusted her diary with the story of her love for the Russian officer Alexander Sorokin.
        </p>
      </div>
      <div :class="$style.awwards">
        <p :class="$style.text">
          Participant of the program "Russian Trace" of the 41st Moscow International Film Festival.
        </p>
      </div>
    </article>
  </section>
</template>

<script>
  export default {
    name: 'SectionFilmDescription'
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
