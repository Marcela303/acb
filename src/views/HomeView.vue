<script>
/*import appConfig from '@src/app.config'*/
import Title from '../components/Title.vue'
import Prologue from '../components/Prologue.vue'
import HandsOn from '../components/HandsOn.vue'
import HumansWanted from '../components/HumansWanted.vue'
import LocomotiveScroll from "locomotive-scroll";
import Footer from '../components/Footer.vue';
import EnvironmentRibbon from '../components/EnvironmentRibbon.vue';

export default {
  page: {
    title: 'Home',
    /*meta: [{ name: 'description', content: appConfig.description }],*/
  },
  components: { Title, Prologue, HandsOn, HumansWanted, Footer, EnvironmentRibbon },
   data() {
    return {
      scroller : null,
      scrollElements: ['what', 'why', 'how', 'whatText', 'whyText', 'howText'],
      effectElements: ['handson', 'handson-p']
    }
  },
   methods: {
    setScroll() {
      this.scroller = new LocomotiveScroll({
        el: this.$refs.container,
        smooth: true,
        offset: [0, 0],
        getSpeed: true,
        getDirection: true,  
        lerp: 0.05     
      });
      this.scroller.on('call', (func, way, obj, id) => {
            //using modularjs
            //this.call(func[0], { way, obj }, func[1], func[2]);
        });

        this.scroller.on('scroll', (args) => {
          for (const scrollElement of this.scrollElements) {
            if(typeof args.currentElements[scrollElement] === 'object') {
              let progress = args.currentElements[scrollElement].progress;
              progress > 0.45 && progress < 0.65 ? args.currentElements[scrollElement].el.classList.add("bright") : args.currentElements[scrollElement].el.classList.remove("bright") ;              
            }
          }
          for (const effectElement of this.effectElements) {
            if(typeof args.currentElements[effectElement] === 'object') {
              let progress = args.currentElements[effectElement].progress;
              //progress > 0.45 && progress < 0.65 ? args.currentElements[scrollElement].el.classList.add("bright") : args.currentElements[scrollElement].el.classList.remove("bright") ;  
              args.currentElements[effectElement].el.classList.add("reached_scroll")            
            }
          }
        });
    },
  },
  mounted() {
    this.setScroll();
  },
}
</script>

<template>
  <div class="main" ref="container" data-scroll-container>
    <div class="main-site-container" data-scroll-section>
      <Title />
      <Prologue />
    </div>  

    <div data-scroll-section>
      <HandsOn />
    </div>  
    
    <div class="humans-wanted-container" data-scroll-section>
      <HumansWanted />
    </div> 

    <div class="footer-container" data-scroll-section>
      <Footer />
    </div> 

    <div class="ribbon-container" data-scroll-section>
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