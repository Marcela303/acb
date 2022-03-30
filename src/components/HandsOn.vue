<template lang="">
  <b-container class="handson">
    <b-row>
      <b-col cols="4">
        <p>Clients</p>
      </b-col>

      <b-col cols="8">
        <div class="handson__title">
          <h3>HandsOn</h3>
        </div>
        <div class="handson__sub">
          <p>We work for people, we love to work for.</p>
        </div>
      </b-col> 

    </b-row>

    <Swiper />
  </b-container>
</template>
<script>

import Swiper from './Swiper.vue'

export default {

  components: { Swiper }

}

</script>

<style lang="scss">

.handson {
  padding-top: 4em;

}

.handson__title h3{
  @include h1;
}

.handson__sub {
  @include copyLight;
}


</style>
