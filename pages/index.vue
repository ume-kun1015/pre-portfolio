<template>
  <div class="portfolio-top">
    <section class="introduction-section-wrapper">
      <div class="introduction-wrapper" data-aos="fade-up">
        <div class="introduction-text">
          <h1>
            アカペラとスノボが大好きなエンジニア
            <br> 利用するのに場所や時間を選ばない
            <br> インターネット上で誰かの役に立ててばいいなと思いながらサービス作りしてます
          </h1>
        </div>
      </div>
    </section>

    <section class="portfolio-logo-section-wrapper" data-aos="fade" data-aos-delay="200">
      <portfolio-logo />
    </section>
  </div>
</template>

<script>
import PortfolioLogo from '~/components/atoms/portfolio-logo.vue'

export default {
  components: {
    PortfolioLogo,
  },
}
</script>

<style lang="scss" scoped>
.portfolio-top {
  min-height: 100vh;

  .introduction-section-wrapper {
    min-height: 480px;
    height: calc(60vh);
    background: $dark_navy;

    .introduction-wrapper {
      max-width: $breakpoint-pc-large;
      margin: 0 auto;

      .introduction-text {
        min-height: 400px;
        height: calc(30vh);
        display: flex;
        justify-content: center;
        align-items: center;
        color: $blue;
        width: 70%;
        margin: 0 auto;

        h1 {
          text-align: center;
        }
      }
    }
  }

  .portfolio-logo-section-wrapper {
    margin-top: -80px;
    z-index: 99;
    text-align: center;
  }
}
</style>
