<template>
  <div class="portfolio-top">
    <section class="introduction-section-wrapper">
      <div class="introduction-wrapper">
        <div class="introduction-text">
          <p>
            アカペラとスノボが<br />
            大好きなエンジニア<br />
            利用するのに場所や時間を選ばない <br />
            インターネット上で <br />
            誰かの役に立ててばいいなと<br />
            思いながらサービス作りしてます
          </p>
        </div>
      </div>

      <section class="portfolio-logo-section-wrapper">
        <portfolio-logo />
      </section>
    </section>

    <portfolio-skills />

    <portfolio-strengths />
  </div>
</template>

<script setup lang="ts">
const description =
  'アカペラとスノボが大好きなエンジニア。メインはサーバーサイド。最近はNuxtjsでの業務でフロントにはまり、フロントサイドやデザインへ転向中。'

useHead(() => {
  return { title: 'トップページ', description, keywords: 'ポートフォリオ, portfolio, nuxtjs, offy' }
})
</script>

<style lang="scss" scoped>
.portfolio-top {
  .introduction-section-wrapper {
    height: 450px;
    background: $dark_navy;

    .introduction-wrapper {
      max-width: $breakpoint-pc-large;
      margin: 0 auto;

      .introduction-text {
        height: 375px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: $blue;
        width: 70%;
        margin: 0 auto;

        p {
          font-size: 1.4rem;
          font-weight: bold;
          text-align: center;
        }
      }
    }

    .portfolio-logo-section-wrapper {
      margin-top: -50px;
      z-index: 2;
      text-align: center;
    }
  }

  @media only screen and (max-width: $breakpoint-mobile) {
    .introduction-section-wrapper {
      .introduction-wrapper {
        .introduction-text {
          width: 85%;
          height: 300px;

          p {
            word-wrap: break-word;
          }
        }
      }

      .portfolio-logo-section-wrapper {
        margin-top: -25px;
      }
    }
  }
}
</style>
