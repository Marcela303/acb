<template lang="">
  <b-container class="prologue container">
    <b-row>
      <b-col cols="4">
        <h3 class="prologue__wwh">WhatWhyHow</h3>
      </b-col>

      <b-col cols="8">
        <h3 class="prologue__title">Prologue</h3>

        <div class="prologue__ourwhat">
          <h3 class="prologue__subtitle bright" data-scroll data-scroll-speed="0.5" data-scroll-id="what">Our What</h3>
          <p class="prologue__desc" data-scroll data-scroll-speed="0.5" data-scroll-id="whatText">
            We create lovable digital products & services with a strong focus on its sustainable purpose.
            <strong>We analyse, create and build.</strong>
          </p>
        </div>

        <div class="prologue_ourwhy">
          <h3 class="prologue__subtitle" data-scroll data-scroll-speed="0.5" data-scroll-id="why">Our Why</h3>
          <p class="prologue__desc" data-scroll data-scroll-speed="0.5" data-scroll-id="whyText">We empower the ones we work with to shape digital change. For them. For their work. For their clients. Keeping our planet in mind. Always.</p>
        </div>

        <div class="prologue_ourhow">
          <h3 class="prologue__subtitle" data-scroll data-scroll-speed="0.5" data-scroll-id="how">Our How</h3>
          <p class="prologue__desc" data-scroll data-scroll-speed="0.5" data-scroll-id="howText">We prototype on a deep understanding of all available data. Interlace digital concept, user interface design & creative code in an iterative manner, then.
            To pave the way for a sustainable backend. Doing this, we strongly believe in diverse teams & their strong expertise to make use of the individual perspectives in close collaboration.
          </p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {

}
</script>

<style lang="scss">

.prologue {
  padding-top: 8em;

  p {
    color: white;
  }

  h3 {
    color: white;
    margin-bottom: 1em;
  }

  strong {
    display: block;
    margin-top: 12px;
    font-weight: 100;
  }

  .prologue__title {
    @include h1;
    margin-bottom: 1em;
    color: white;
  }

  .prologue__wwh {
    @include copy;
  }

  .prologue__subtitle {
    @include copy;
    opacity: 0.30;
    transition: 1s all ease;
    &.bright{
      opacity: 1;
      transition: 1s all ease;
    }
  }

  .prologue__desc {
    @include h3;
    margin-bottom: 3em;
    opacity: 0.30;
    transition: 1s all ease;
    &.bright{
      opacity: 1;
      transition: 1s all ease;
    }
  }
}

</style>
