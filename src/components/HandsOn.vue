<template lang="">
  <b-container class="handson">
    <b-row>
      <b-col cols="4">
        <p class="handson__clients">Clients</p>
      </b-col>

      <b-col cols="8">
          <h2 class="handson__title">HandsOn</h2>
          <h3 class="handson__sub">We work for people, we love to work for.</h3>

        <div class="swiper-main">
          <BrandsSwiper />
        </div>
      </b-col> 
    </b-row>
  </b-container>
</template>

<script>

import BrandsSwiper from './BrandsSwiper.vue'

export default {
  components: { BrandsSwiper }
}

</script>

<style lang="scss">

.handson {
  padding-top: 5em;
 
  .handson__clients {
  @include copy;
  }

  .handson__title{
    @include h1;
    margin-bottom: 0.5em;
    }

  .handson__sub {
    @include h3;
  }
}

</style>
