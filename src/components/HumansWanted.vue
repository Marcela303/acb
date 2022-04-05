<template lang="">
    <b-container class="humans-wanted">
        <b-row>
            <b-col cols="4">
                <h3 class="humans-wanted__open">Open Positions</h3>
            </b-col>
            <b-col>
                <h2  class="humans-wanted__title">Humans wanted</h2>
                <p class="humans-wanted__desc">We are looking for people who might enjoy working with us. If this is given, everything else can be arranged.</p> 

                <LetsTalkSwiper />
                
                <DUS />
            </b-col>
        </b-row>
    </b-container>        
</template>

<script>

import LetsTalkSwiper from './LetsTalkSwiper.vue'
import DUS from './DUS.vue'

export default {
    components: { DUS, LetsTalkSwiper }
}

</script>

<style lang="scss">

.humans-wanted {
    padding-top: 5em;

    .humans-wanted__open {
        @include copy;
        color: white;
        margin-top: 1em;
    }
    
    .humans-wanted__title {
    @include h1;
        color: white;
        margin-bottom: 0.5em;
    }

    .humans-wanted__desc {
        @include h3;
        color: white;
    }

    .remote__title {
        @include h1;
        color: white;
    }

    .remote__desc {
        @include h3;
        color: white;
    }
}
    
</style>