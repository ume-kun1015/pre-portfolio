<template>
  <div class="portfolio-skills">
    <div class="skills-title-wrapper">
      <div class="skills-text">
        <h2>スキル</h2>
      </div>
    </div>

    <ul>
      <li
        v-for="(skill, index) in skills"
        :key="index"
      >
        <portfolio-progress-bar :name="skill.name" :width="skill.width" />
      </li>
    </ul>
  </div>
</template>

<script>
import PortfolioProgressBar from '~/components/molecules/portfolio-progress-bar.vue'

export default {
  components: {
    PortfolioProgressBar,
  },
  data() {
    return {
      skills: [
        {
          name: 'golang',
          years: 2,
          width: '80',
        },
        {
          name: 'ruby',
          years: 2,
          width: '75',
        },
        {
          name: 'php',
          years: 1,
          width: '65',
        },
        {
          name: 'nodejs',
          years: 1.5,
          width: '75',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.portfolio-skills {
  margin: 3em 0;
  padding: 0 3.2%;

  .skills-title-wrapper {
    max-width: $breakpoint-pc-large;
    margin: 0 auto;

    .skills-text {
      color: $dark_navy;
      text-align: center;
      margin-bottom: 3rem;

      @media only screen and (max-width: $breakpoint-mobile) {
        margin: 1em 0;
      }
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

  @media only screen and (max-width: $breakpoint-mobile) {
    margin: 1em 0;
  }
}
</style>
