<script>
/*import appConfig from '@src/app.config'*/
import Title from '../components/Title.vue'
import Prologue from '../components/Prologue.vue'
import HandsOn from '../components/HandsOn.vue'
import HumansWanted from '../components/HumansWanted.vue'

export default {
  page: {
    title: 'Home',
    /*meta: [{ name: 'description', content: appConfig.description }],*/
  },
  components: { Title, Prologue, HandsOn, HumansWanted }
}
</script>

<template>
  <div class="main">
    <div class="main-site-container">
      <Title />
      <Prologue />
    </div>  

    <div>
      <HandsOn />
    </div>  
    
    <div class="humans-wanted-container">
      <HumansWanted />
    </div>  
  </div>
 </template>

 <style lang="scss"> 

 .main-site-container {
    background-color: black;
    padding-bottom: 6em;
 }

 .humans-wanted-container {
    background-color: black;
 }

 </style>
