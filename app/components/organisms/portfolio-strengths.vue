<template>
  <div class="portfolio-strengths">
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

    <div class="portolio-strengths-link">
      <nuxt-link to="/strengths">
        もっと詳しく...
      </nuxt-link>
    </div>
  </div>
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
      description: 'アプリケーションをリリースするまでの工程を知り、フロント/サーバーエンド/クラウドインフラで適宜開発や改修を行える。',
      iconStyle: ['far', 'clipboard'],
    },
    {
      summary: 'バイリンガル',
      description: '過去Toefl99/120を取得。海外の人だけで編成されたチームで、英語でコミュニーケションを取っての開発経験があります。',
      iconStyle: ['fas', 'language'],
    },
  ]
}
</script>

<style lang="scss" scoped>
.portfolio-strengths {
  padding: 5em 3.2%;

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

  .portolio-strengths-link {
    margin: 1em 0;
    text-align: right;
  }
}
</style>
