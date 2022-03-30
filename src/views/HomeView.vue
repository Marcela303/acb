<script>
/*import appConfig from '@src/app.config'*/
import Title from '../components/Title.vue'
import Prologue from '../components/Prologue.vue'
import HandsOn from '../components/HandsOn.vue'

export default {
  page: {
    title: 'Home',
    /*meta: [{ name: 'description', content: appConfig.description }],*/
  },
  components: { Title, Prologue, HandsOn }
}
</script>

<template>

  <div class="main">
    <div class="main-site">
      <Title />
      <Prologue />
    </div>   
      <HandsOn />
  </div>

 </template>

 <style lang="scss"> 

 .main-site {
   background-color: black;
 }


 </style>
