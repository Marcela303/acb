<template lang="">
    <div class="ribbon">
        <h5 class="ribbon__desc">Your visit on our website consumed <span> 0.01g</span> of CO²</h5>
        <h5 class="ribbon__sub">acb.studio creates meaningful digital products, keeping humans and the environment in mind. </h5>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .ribbon {
        padding: 5em 0 3em 5em;

        .ribbon__desc {
            @include copyMicroBold;
            display: block;

            span {
                color: #43ad3f;
                font-weight: bold;
            }
        }

        .ribbon__sub {
            @include copyMicroBold;
            color:#696969;
        }
    }
</style>