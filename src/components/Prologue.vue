<template lang="">
  <b-container class="prologue container">
    <b-row>

      <b-col cols="3">
        &nbsp;
      </b-col>

      <b-col cols="9">
        <h3 class="prologue__title">Prologue</h3>
      </b-col>


      <b-col cols="3">
        <div class="prologue__wwh">
          <h2>WhatWhyHow</h2>
        </div>
      </b-col>

      <b-col cols="9">
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
  &.container{
    max-width: 98% !important;
  }
  h2, h4 {
    color: white;
  }

  h3{
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
    padding-left: 3em;

    h2{
      @include copy($fontweight: bold, $size: 24px);
    }
  }

  .prologue__subtitle {
    @include copy($fontweight: bold);
    opacity: 0.30;
    transition: 1s all ease;
    &.bright{
      opacity: 1;
      transition: 1s all ease;
    }
  }

  .prologue__desc {
    @include h2;
    margin-bottom: 3em;
    opacity: 0.30;
    transition: 1s all ease;
    color: white;
    &.bright{
      opacity: 1;
      transition: 1s all ease;
    }
  }
}

</style>
