<template lang="">
    <b-container class="humans-wanted">
        <b-row>
            <b-col cols="3">
                <h3 class="humans-wanted__open">Open Positions</h3>
            </b-col>

            <b-col cols="9">
                <h2  class="humans-wanted__title">Humans wanted</h2>
                <p class="humans-wanted__desc">We are looking for people who might enjoy working with us. If this is given, everything else can be arranged.</p> 

                <div class="swiper-container">
                    <HumansWantedSwiper />
                </div>
                
                <div class="dus-container">
                    <DUS />
                </div> 
            </b-col>
        </b-row>
    </b-container>        
</template>

<script>
import HumansWantedSwiper from './HumansWantedSwiper.vue'
import DUS from './DUS.vue'

export default {
    components: { DUS, HumansWantedSwiper }
}
</script>

<style lang="scss">

.humans-wanted {
    padding-top: 8em;

    .humans-wanted__open {
        @include copy($fontweight: bold);
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
        margin-bottom: 1.5em;
    }

    .remote__title {
        @include h1;
        color: white;
    }

    .remote__desc {
        @include h3;
        color: white;
    }

    .swiper-container {
        margin-bottom: 8em;

        .carousel {
            .carousel__prev, .carousel__next {
                display: none;
            }
        
            .carousel__viewport {
                margin-bottom: 1em;

                .carousel__slide {
                    width: 70% !important;
                }
            }

            .carousel__pagination {
                justify-content: left;
                padding-left: 0;

                .carousel__pagination-button {
                    margin: 0;
                    border-radius: 0;
                    background-color: #484848;
                    width: 35px;
                    height: 2px;
                }

                .carousel__pagination-button--active {
                    background-color: #B8B8B8	;
                }
            }
        }
    }
}
    
</style>