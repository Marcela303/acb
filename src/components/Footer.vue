<template lang="">
    <div class="footer">
        <b-container>
            <b-row>
                <b-row>
                    <b-col cols="12">
                         <h4 class="footer__title">
                            acb.studio
                            <strong>analyse,create &amp; build</strong>
                        </h4>   
                    </b-col>
                </b-row>
            </b-row>

            <b-row>
                <b-col class="footer__address" cols="8">
                    <h5>BASE</h5>
                    <span>Lindenstraße 103</span>
                    <span>40233 Düsseldorf</span>
                </b-col>

                <b-col class="footer__agb">
                    <h5>SENSE OF DUTY</h5>
                    <ul>
                        <li>Impressum</li>
                        <li>Datenschutz</li>
                    </ul>
                </b-col>

                <b-col class="footer__social">
                    <h5>STAY TUNED</h5>
                    <ul>
                        <li>Medium</li>
                        <li>LinkedIn</li>
                    </ul>
                </b-col>
            </b-row>   

            <b-row>
                <b-col class="footer__eco-logos">
                    <h5>PROUD TO BE PART</h5>
                    <ul>
                        <li><img src="/assets/images/partOf/BCorporation.svg" alt=""></li>
                        <li><img src="/assets/images/partOf/NewMittellstand.svg" alt=""></li>
                        <li><img src="/assets/images/partOf/LfCA.svg" alt=""></li>

                    </ul>
                </b-col>               
            </b-row>
        </b-container>       
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss">

.footer {
    h4, h5, span, ul {
        color: white;
    }

    h5 {
        @include copyMicro;
        margin-bottom: 2em;
    }

    ul {
        padding-left: 0;

        li {
            @include copyLight;
            list-style: none;
            line-height: 2.2;
        }  
    }
  
    .footer__title {
        margin-bottom: 4em;

        strong {
            display: block
        }
    }

    .footer__address {

        span {
        @include copyLight;
        display: block;
        line-height: 1.5;
        }  
    }

    .footer__social ul li {
        text-decoration: underline;
        text-underline-offset: 8px;
        text-decoration-thickness: 0px;
    }

    .footer__agb ul li { 
        text-decoration: underline;
        text-underline-offset: 8px;
        text-decoration-thickness: 0px;
    }

    .footer__eco-logos {
        margin-top: 8em;

        ul {
            display: flex;

            img {
                width: 90px;
                margin-right: 1em;

            }
        }
    }
}
    
</style>