<template>
  <div class="portfolio-logo">
    <img src="/images/logo.jpg" alt="logo" />
  </div>
</template>

<style lang="scss" scoped>
.portfolio-logo {
  img {
    border-radius: 50%;
    border: solid 5px $white;
    height: 150px;
  }

  @media only screen and (max-width: $breakpoint-mobile) {
    img {
      border-radius: 50%;
      border: solid 2px $white;
      height: 100px;
    }
  }
}
</style>
