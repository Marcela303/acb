<template lang="">
  <GSCarousel
    :items="wanted"
    item-gap="16"
    :items-to-show="2"
  >
    <template #item="{ data }">
      <div class="wanted">
        <div class="wanted-name-wrapper"> 
          <p class="wanted__name">{{ data.desc }}</p>
        </div>

        <div class="wanted-desc-wrapper">
          <p class="wanted__desc">{{ data.sub }}</p>
        </div>
      </div>
    </template>
    
  </GSCarousel>
</template>

<script>

import { wanted } from '../assets/data/letsTalk.json';
import { GSCarousel } from 'gitart-scroll-carousel';
import 'gitart-scroll-carousel/dist/style.css';


export default {
    components: {
    GSCarousel
  },

    data() {
        return {
            wanted: wanted
        }
    }    
}

</script>

<style lang="scss">

.wanted {
    border: 1px solid white;

  .wanted-name-wrapper {
    padding: 4em 2em 0em 2em;
  }

  .wanted-desc-wrapper {
    border: 1px solid white;
    padding-top: 1em;
    padding-right: 1em;
  }

  p {
    color: white;
    text-align: right;
}

  hr {
    color: white;
  }

  
}


    
</style>