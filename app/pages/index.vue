<template>
  <div class="portfolio-top">
    <section class="introduction-section-wrapper">
      <div class="introduction-wrapper">
        <div class="introduction-text">
          <h1>
            アカペラとスノボが大好きなエンジニア
            <br />
            利用するのに場所や時間を選ばない <br />
            インターネット上で誰かの役に立ててばいいなと思いながらサービス作りしてます
          </h1>
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

<script>
import PortfolioLogo from '~/components/atoms/portfolio-logo.vue'
import PortfolioSkills from '~/components/organisms/portfolio-skills.vue'
import PortfolioStrengths from '~/components/organisms/portfolio-strengths.vue'

export default {
  components: {
    PortfolioLogo,
    PortfolioSkills,
    PortfolioStrengths,
  },
  head() {
    return {
      title: 'トップページ',
      meta: [this.$metaInfo.getDescription(this.description), this.$metaInfo.getKeywords('ポートフォリオ, portfolio, nuxtjs, romukey')],
    }
  },
  data() {
    return {
      description: `アカペラとスノボが大好きなエンジニア。メインはサーバーサイド。最近はNuxtjsでの業務でフロントにはまり、フロントサイドやデザインへ転向中。`,
    }
  },
}
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

        h1 {
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
          width: 75%;
          height: 300px;

          h1 {
            word-wrap: break-word;
            font-size: 1.5em;
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
