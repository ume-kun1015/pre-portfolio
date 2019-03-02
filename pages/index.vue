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

    <section class="career-section-wrapper" data-aos="fade" data-aos-delay="200">
      <div class="career-title-wrapper">
        <div class="career-title">
          <h2>職務経歴</h2>
        </div>
      </div>
      <div class="career-item-wrapper">
        <ul class="career-items">
          <li
            v-for="(career, index) in careers"
            :key="index"
          >
            <portfolio-career-item
              :company-name="career.companyName"
              :job-description="career.jobDescription"
              :start-date="career.startDate"
            />
          </li>
        </ul>
      </div>
    </section>

    <section class="skills-section-wrapper" data-aos="fade">
      <div class="skills-title-wrapper">
        <div class="skills-text">
          <h2>スキル</h2>
        </div>
      </div>
      <div class="skills-chart-wrapper">
        <portolio-doughnut-chart :data="programmingLanguageChartData" :options="programmingLanguageChartOption" />
        <portolio-doughnut-chart :data="awsServiceChartData" :options="awsServiceChartOption" />
      </div>
    </section>
  </div>
</template>

<script>
import PortfolioLogo from '~/components/atoms/portfolio-logo.vue'
import PortfolioCareerItem from '~/components/molecules/portfolio-career-item.vue'

export default {
  components: {
    PortfolioLogo,
    PortfolioCareerItem,
  },
  data() {
    const language = this.$constant.LANGUAGE
    const awsService = this.$constant.AWS_SERVICE

    return {
      careers: [
        {
          companyName: 'timers-inc(インターン生)',
          jobDescription: '1. 社員全員が分析できるようなプラットホームの開発/運用。2. 社内SlackBot開発 3. PHPでのAPIサーバー開発',
          startDate: '2016/08',
        },
        {
          companyName: 'VISITS Technologies株式会社',
          jobDescription: '1. 新規事業になるアプリのAPIサーバーをRuby on Railsで開発。2. 既存サービスのVISITS OBの運用',
          startDate: '2017/08',
        },
        {
          companyName: '株式会社エブリー',
          jobDescription: '1. DELISH KITCHENのAPIサーバーの開発/運用 2. DELISH KITCHENのWEBフロント開発',
          startDate: '2018/03',
        },
      ],
      programmingLanguageChartData: {
        labels: language.map(lang => lang.NAME),
        datasets: [
          {
            backgroundColor: language.map(lang => lang.COLOR),
            data: language.map(lang => lang.RATIO),
          },
        ],
      },
      programmingLanguageChartOption: {
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'プログラミング言語',
          fontSize: 14,
        },
      },
      awsServiceChartData: {
        labels: awsService.map(aws => aws.NAME),
        datasets: [
          {
            backgroundColor: awsService.map(aws => aws.COLOR),
            data: new Array(awsService.length).fill(awsService.length / 100),
          },
        ],
      },
      awsServiceChartOption: {
        maintainAspectRatio: false,
        title: {
          display: true,
          text: '使用したことあるAWSサービス',
          fontSize: 14,
        },
      },
    }
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

  .career-section-wrapper {
    background: $dark_navy;
    padding: 20px;

    .career-title-wrapper {
      max-width: $breakpoint-pc-large;
      margin: 0 auto;

      .career-title {
        color: $blue;
        text-align: center;
      }

      .career-title::after {
        content: '';
        display: block;
        width: 10%;
        margin: 6px auto 0;
        border-bottom: 1px solid $blue;
        transition: width 0.3s ease-in-out;
      }
    }

    .career-item-wrapper {
      max-width: $breakpoint-pc-large;
      margin: 0 auto;
      position: relative;

      .career-items {
        li {
          margin: 30px;
        }
      }
    }

    .career-item-wrapper::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 10px;
      background: #afdcf8;
      left: 27.5%;
    }
  }

  .skills-section-wrapper {
    padding: 5em 0;

    .skills-title-wrapper {
      max-width: $breakpoint-pc-large;
      margin: 0 auto;

      .skills-text {
        color: $dark_navy;
        text-align: center;
        margin-bottom: 3rem;
      }

      .skills-text::after {
        content: '';
        display: block;
        width: 10%;
        margin: 6px auto 0;
        border-bottom: 1px solid $dark_navy;
        transition: width 0.3s ease-in-out;
      }
    }

    .skills-chart-wrapper {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
