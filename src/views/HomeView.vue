<script>
/*import appConfig from '@src/app.config'*/
import Title from '../components/Title.vue'
import Prologue from '../components/Prologue.vue'
import HandsOn from '../components/HandsOn.vue'
import HumansWanted from '../components/HumansWanted.vue'
import Footer from '../components/Footer.vue'
import EnvironmentRibbon from '../components/EnvironmentRibbon.vue'

export default {
  page: {
    title: 'Home',
    /*meta: [{ name: 'description', content: appConfig.description }],*/
  },
  components: { Title, Prologue, HandsOn, HumansWanted, Footer, EnvironmentRibbon }
}
</script>

<template>
  <div class="main">
    <div class="main-site-container">
      <Title />
      <Prologue />
    </div>  

    <div class="handson-container">
      <HandsOn />
    </div>  
    
    <div class="humans-wanted-container">
      <HumansWanted />
    </div> 

    <div class="footer-container">
      <Footer />
    </div> 

    <div class="ribbon-container">
      <EnvironmentRibbon />
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

 .footer-container {
    padding-top: 5em;
    padding-bottom: 4em;
    background-color: black;
 }

 .ribbon-container {
   height: 120px;
 }

 </style>