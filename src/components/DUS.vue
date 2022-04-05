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
                <p class="dus__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>

            <div>
                <p class="dus__sub">Our base</p>
                <p class="dus__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>

            <div>
                <p class="dus__sub">Our Hubs</p>
                <p class="dus__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
        @include copy;
            color: white;
        }

    .dus__desc {
        @include copyLight;
            color: white;
            margin-bottom: 3em;
        }
    }   
}
 
</style>