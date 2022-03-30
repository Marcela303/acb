<template lang="">
   <div v-if="brands.lenght">
  <swiper v-for="brand in brands" :key="brand">
      <swiper-slide>{{ brand.name}}</swiper-slide>
    </swiper>
  </div>

</template>

<script>

import { Swiper, SwiperSlide} from 'swiper/vue';
import brands from '../assets/data/brands.json';


export default {

 /* components: {
    Swiper,
    SwiperSlide
  },*/

  data() {
    return {

    }
  },
}
</script>

<style lang="">

</style>
