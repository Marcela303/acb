<template lang="">
    <div class="remote">
        <h2 class="remote__title">Remote first.
            <strong>Always in person.</strong>
        </h2>
        <p class="remote__desc">acb.studio is wherever we can support. We’re fully remote. But we also feel home in some places.</p>
    </div>

    <div class="dus">
        <h2 class="dus__title">DUS</h2>
        <div class="dus-wrapper">
            <div>
                <p class="dus__sub">How we work</p>
                <p class="dus__desc">
                    Humans in different cities from different countries are creating heartful products. 
                    And because the right people aren't always around, 
                    everyvody can work fully remote. But of course, we are humans, 
                    we love to interact face2face, without a screen. 
                    This is why we meet every month in person in our small base.
                </p>
            </div>

            <div>
                <p class="dus__sub">Our base</p>
                <p class="dus__desc">
                    Just pass by our Düsseldorf studio, send some digital words 
                    or give us a classic call.
                </p>

                <ul class="contact-info-wrapper">
                    <li>Lindenstraße 103</li>
                    <li>40233 Düsseldorf</li>
                    <li>Germany</li>
                    <li>hello@acb.studio</li>
                    <li>+49 211 00000000</li>
                </ul>           
            </div>

            <div>
                <p class="dus__sub">Our Hubs</p>
                <p class="dus__desc">And yes: if you are around Valencia or Hamburg, just contact our base and we'll connect you to our people</p>
            </div>
        </div>       
    </div>    
</template>

<script>
export default {  
}
</script>

<style lang="scss">

.remote {
    .remote__title {
        strong {
            display: inline-block;
        }
    }
}

.dus {

    .dus__title {
        color: white;
        font-size: 9em;
        margin-bottom: 28px;
    }

    .dus-wrapper {
        padding-left: 10em;

        .dus__sub {
        @include copyBold;
            color: white;
        }

    .dus__desc {
        @include copyLight;
            color: white;
            margin-bottom: 1em;
        }
    } 
    
    .contact-info-wrapper {
        padding-left: 0rem;
    } 
        li{
        @include copyLight;
        list-style: none;
        color: white;
    }
}
 
</style>