<template>
  <section class="strengths-section-wrapper" data-aos="fade" data-aos-delay="200">
    <div class="strengths-title-wrapper">
      <div class="strengths-text">
        <h2>自分の強み</h2>
      </div>
    </div>
    <div class="strengths-items-wrapper">
      <ul class="strengths-items">
        <li v-for="(strength, index) in strengths" :key="index">
          <portfolio-strength-item-card :summary="strength.summary" :description="strength.description" :icon-style="strength.iconStyle" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import { Strength } from '../../entities/strength'
import PortfolioStrengthItemCard from '../molecules/portfolio-strength-item-card.vue'

@Component({
  components: {
    PortfolioStrengthItemCard,
  },
})
export default class PortfolioStrengths extends Vue {
  strengths: Strength[] = [
    {
      summary: 'キャッチアップし改良を加えられる',
      description: '経験がないことに対しても、自分のものにすべく努力し、その上で自ら改良を加えることができる。',
      iconStyle: ['fab', 'hubspot'],
    },
    {
      summary: 'フルスタックエンジニア',
      description: 'アプリケーションをリリースするまでの工程を知り、フロント/サーバーエンド/インフラサイドで適宜開発を行える。',
      iconStyle: ['far', 'clipboard'],
    },
  ]
}
</script>

<style lang="scss" scoped>
.strengths-section-wrapper {
  padding: 5em 0;

  .strengths-title-wrapper {
    max-width: $breakpoint-pc-large;
    margin: 0 auto;

    .strengths-text {
      text-align: center;
    }

    .strengths-text::after {
      content: '';
      display: block;
      width: 20%;
      margin: 6px auto 0;
      border-bottom: 1px solid $dark_navy;
      transition: width 0.3s ease-in-out;
    }
  }

  .strengths-items-wrapper {
    max-width: $breakpoint-pc-large;
    margin: 0 auto;

    .strengths-items {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      li {
        width: 33%;
        padding: 0 3.2%;

        @media only screen and (max-width: $breakpoint-mobile) {
          width: 90%;
        }
      }
    }
  }
}
</style>
