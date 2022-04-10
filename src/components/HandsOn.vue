<template lang="">
<div>
  <b-container class="handson">
    <b-row >
      <b-col cols="3">
        <p class="handson__clients">Clients</p>
      </b-col>

      <b-col cols="9">
          <h2 class="handson__title" data-scroll data-scroll-id="handson">HandsOn</h2>
          <h3 class="handson__sub" data-scroll data-scroll-id="handson-p">We work for people, we love to work for.</h3>

        <div class="brands-swiper-main" data-scroll data-scroll-speed="1">
          <BrandsSwiper />
        </div>
      </b-col> 
    </b-row>
  </b-container>
</div>
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
  @include copy($fontweight: bold);
  }

  .handson__title{
    @include h1;
    margin-bottom: 0.3em;
    left: -50px;
    transition: 2s all ease;
    opacity: 0;
    &.reached_scroll{
      left: 0;
      transition: 2s all ease;
      opacity: 1;
    }    
  }

  .handson__sub {
    @include h3;
    left: -50px;
    opacity: 0;
    &.reached_scroll{
      opacity: 1;
      left: 0;
      transition: 2s all ease;
    } 
  }
}

</style>
