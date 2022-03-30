<template lang="">
  <b-container class="welcome">
    <b-row>
      <b-col cols="4">
          <p class="welcome__greeting">Guten morgen.</p>
      </b-col>

      <b-col cols="8">
        <div class="welcome__title">
          <h1>
            acb.studio
            <strong>digital product design</strong>
          </h1>
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

.welcome{
  padding-top: 4em;

  p {
    color: white;
  }

  .welcome__title h1{
   @include h1;
    margin-bottom: 0;
    color: white;

  }

  .welcome__title strong{
   @include h1;
    color: #9ea0a657;
    display: block;
  }

  .welcome__greeting {
    @include copy;
    margin-top: 1em;

  }
}

</style>
