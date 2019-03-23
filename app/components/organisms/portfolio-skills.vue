<template>
  <div class="portfolio-skills">
    <div class="skills-title-wrapper">
      <div class="skills-text">
        <h2>スキル</h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.portfolio-skills {
  margin: 3em 0;

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

  @media only screen and (max-width: $breakpoint-mobile) {
    margin: 1em 0;
  }
}
</style>
