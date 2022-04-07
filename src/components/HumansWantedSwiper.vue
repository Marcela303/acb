<template lang="">
  <Carousel>
    <Slide v-for='human in humans' :key='human'>
      <div class="human">
        <div class='carousel__item human-desc-wrapper'>
          <p class="human__desc">{{ human.desc }}</p>
        </div>

        <div class="human-sub-wrapper">
          <p class="human__sub">{{ human.sub }}</p>
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

import { humans } from '../assets/data/humansWanted.json';
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
    humans: humans,
    
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

.human {
  border: 1px solid white;
  margin-right: 16px;


  .human-desc-wrapper {
    padding: 8em 1em 0em 1em;
    text-align: left;

    .human__desc {
      @include h3;
      color: white;
    }
  }  

  .human-sub-wrapper {
    border-top: 1px solid white;
    padding: 1.5em;
    
    .human__sub {
      @include h3;
      color: white;
      text-align: right;
      margin-bottom: 0;
      text-decoration: underline 1px;
    }
  }
}
    
</style>