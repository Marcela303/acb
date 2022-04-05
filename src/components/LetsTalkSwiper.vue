<template lang="">
    <GSCarousel
    :items="wanted"
    item-gap="16"
    :items-to-show="2"
  >
  <template #item="{ data }">
    <div class="wanted">
      <p class="wanted__name">{{ data.desc }}</p>
      <p class="wanted__desc">{{ data.sub }}</p>
    </div>
  </template>
    
  </GSCarousel>

</template>

<script>

import {wanted} from '../assets/data/letsTalk.json'

export default {
    data() {
        return {
            wanted: wanted
        }
    }    
}

</script>

<style lang="">
    
</style>