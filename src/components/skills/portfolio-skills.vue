<template>
  <div class="portfolio-skills">
    <div class="skills-title-wrapper">
      <div class="skills-text">
        <h2>スキル</h2>
      </div>
    </div>

    <ul>
      <li v-for="(skill, index) in skills" :key="index">
        <portfolio-progress-bar :skill="skill" />
      </li>
    </ul>

    <nuxt-link to="/skills"> もっと詳しく... </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { Skill } from '../../types/skill'

const skills = ref<Skill[]>([
  {
    name: 'golang',
    years: '2年',
    percent: 80,
  },
  {
    name: 'ruby',
    years: '2年',
    percent: 75,
  },
  {
    name: 'php',
    years: '1年',
    percent: 65,
  },
  {
    name: 'nodejs',
    years: '1.5年',
    percent: 75,
  },
])
</script>

<style lang="scss" scoped>
.portfolio-skills {
  margin: 3em 0;
  padding: 0 3.2%;
  text-align: right;

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

  a {
    display: block;
    margin: 1em 0;
  }

  @media only screen and (max-width: $breakpoint-mobile) {
    margin: 1em 0;
  }
}
</style>
