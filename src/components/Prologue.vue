<template lang="">
  <b-container class="prologue container">
    <b-row>
      <b-col cols="4">
        <p class="prologue__wwh">WhatWhyHow</p>
      </b-col>

      <b-col cols="8">
        <h2 class="prologue__title">Prologue</h2>

        <div class="prologue__ourwhat">
          <p class="prologue__subtitle">Our What</p>
          <p class="prologue__desc">
            We create lovable digital products & services with a strong focus on its sustainable purpose.
            <strong>We analyse, create and build.</strong>
          </p>
        </div>

        <div class="prologue_ourwhy">
          <p class="prologue__subtitle">Our Why</p>
          <p class="prologue__desc">We empower the ones we work with to shape digital change. For them. For their work. For their clients. Keeping our planet in mind. Always.</p>
        </div>

        <div class="prologue_ourhow">
          <p class="prologue__subtitle">Our How</p>
          <p class="prologue__desc">We prototype on a deep understanding of all available data. Interlace digital concept, user interface design & creative code in an iterative manner, then.
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

  strong {
    display: block;
    margin-top: 12px;
    font-weight: 100;
  }

  .prologue__title {
  @include h1;
  margin-bottom: 24px;
  color: white;
  }

  .prologue__wwh {
    @include copy;
  }

  .prologue__subtitle {
    @include copy;
    margin-bottom: 0;
  }

  .prologue__desc {
     @include copyLight;
     margin-bottom: 2em;
  }

}

</style>
