<template lang="">
  <Carousel>
    <Slide v-for='brand in brands' :key='brand'>
      <div class="brand">
        <div class="carousel__item">
          <img :src="brand.logo">
          <p class="brand__name">{{ brand.name }}</p>
          <p class="brand__desc">{{ brand.desc }}</p>
        </div>      
      </div>  
    </Slide>

    <template #addons>
      <Pagination />
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { brands } from '../assets/data/brands.json';
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import { Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'ExamplePagination',
  components: {
  Pagination,
  Carousel,
  Slide,
  Navigation,
  },

  data: () => ({ 
    brands: brands,
    
    // carousel settingss
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },

    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 1,
        snapAlign: 'start',
      },
    },
  }),
});

</script>

<style lang="scss">

.brands-swiper-main {
  margin-top: 3em;

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
    @include copy($fontweight: bold);
    margin-top: 1em;
    }

    .brand__desc {
     @include copy;
     margin-bottom: 0;
    }
  }

  .carousel {
    .carousel__prev, .carousel__next {
      display: none;
    }

    .carousel__viewport {
      margin-bottom: 1em;

      .carousel__slide {
        width: 73% !important;
      }
    }

    .carousel__pagination {
      justify-content: left;
      padding-left: 0;

      .carousel__pagination-button {
        margin: 0;
        border-radius: 0;
        background-color: #F0F0F0;
        width: 35px;
        height: 2px;
      }

      .carousel__pagination-button--active {
        background-color: #D3D3D3;
      }
    }
  }
}

</style>
