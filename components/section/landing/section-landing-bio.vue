<template>
  <section :class="$style.container" id="bio">
    <h3 :class="$style.title">
      <span :class="$style.text">
        personal <br>biography
      </span>
    </h3>
    <div :class="$style.content">
      <article :class="$style.textBlock">
        <h4 :class="$style.title">
          <span :class="$style.text">Education</span>
        </h4>
        <p :class="$style.paragraph">
          Then I graduated from MFS (Film Scoring) and Berklee College of Music (Film Scoring, distance). I composed music for feature fiction, non-fiction films and series, cooperating with Russia, Japan, Kazakhstan, and France.
        </p>
      </article>
      <article :class="$style.textBlock">
        <h4 :class="$style.title">
          <span :class="$style.text">Childhood</span>
        </h4>
        <p :class="$style.paragraph">
          From the very childhood, I began to study music. I graduated from the Children's Music School named after Balakirev in Yaroslavl, specializing in Domra and Composition. At the age of 16, I began to try my hand at writing music, making my first commercial. After that, I continued to move in this direction.
        </p>
      </article>
      <article :class="$style.textBlock">
        <h4 :class="$style.title">
          <span :class="$style.text">First work in big cinema</span>
        </h4>
        <p :class="$style.paragraph">
          My first work in big cinema was the Russian full-length film "Inside the Walls" (dir. Vyacheslav Rudenko). The debut work on this project bore to me good results: complimentary reviews from foreign Film & TV composers (including nominees and winners of the Grammy, Golden Globe awards) and victories at international film awards and film festivals, including Los Angeles CineFest, Cult Critic Movie Awards, Hollywood International Moving Pictures Film Festival.
        </p>
      </article>
    </div>
    <div :class="$style.imgbox">
      <!--img src="https://psv4.userapi.com/c505536/u179990973/docs/d41/12650d6f96b4/sintsov.png?extra=ynFDmD6vP-dltdYvCty5R7Vm4WWxBgoIzfu7oiIhlCmFe2UUAt2E_-Nn_HEIRiQ1ryhBeEUSA_nZROLfdmld-LLOiiz48m6xttdiGT3rkiRx3h0Y9xAS7QuzuHI2JpZlcAQKqguyQMAmyGTczA_5apuZRHw" alt=""-->
    </div>
  </section>
</template>

<script>
  export default {
    name: 'SectionLandingBio'
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
