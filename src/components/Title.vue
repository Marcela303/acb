<template lang="">
  <b-container class="welcome">
    <b-row>
      <b-col cols="3">
          <p class="welcome__greeting">Guten morgen.</p>
      </b-col>

      <b-col cols="9">
          <h1 class="welcome__title">
            acb.studio
            <strong>digital product design</strong>
          </h1>
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

  .welcome__title{      
      margin-bottom: 0;
      color: white;
      strong{
        color: #9ea0a657;
        display: block;
      }
  }

  .welcome__greeting {
    @include copy;
    margin-top: 1em;
  }
}

</style>
