<template lang="">
  <GSCarousel
    :items="brands"
    item-gap="16"
    :items-to-show="2"
  >
    <template #item="{ data }">
      <div class="brand">
        <img :src="data.logo">
        <p class="brand__name">{{ data.name }}</p>
        <p class="brand__desc">{{ data.desc }}</p>
      </div>
    </template>
    
  </GSCarousel>
</template>

<script>
import { brands } from '../assets/data/brands.json';
import { GSCarousel } from 'gitart-scroll-carousel';
import 'gitart-scroll-carousel/dist/style.css'

export default {
  components: {
    GSCarousel
  },

  data() {
    return {
      brands: brands
    }
  }
}
</script>

<style lang="scss">

.swiper-main {
  margin-top: 3em;
    .gsc-content{
      .gsc-content__track{
        overflow-x: visible;
        overflow-y: visible;
      }
    }
    .gsc-content__slide {
      width: 70% !important;
      padding-right: 4em;
    }

    .gsc-arrow {
      display: none;
    }

    img {
    filter: invert(1);
    width: 80px;
    height: 80px;
    }

    .carousel__slide {
      display: block;
      margin-right: 6em;
      text-align: left;
    }

    .brand {
      .brand__name {
      @include copy;
      margin-top: 1em;

    }

    .brand__desc {
      @include copyLight;
    }
  }
}

</style>
