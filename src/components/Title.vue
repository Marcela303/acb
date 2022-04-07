<template lang="">
  <b-container class="welcome">
    <b-row>
      <b-col cols="3">
        <div class="welcome__greeting">
          <h2>Guten morgen.</h2>
        </div>          
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

  h2 {
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

<<<<<<< HEAD
  .welcome__greeting h2 {
    @include copyBold;
=======
  .welcome__greeting {
    @include copy($fontweight: bold);
>>>>>>> 091222d6f527862f08e538b64453137e9cc4fda3
    margin-top: 1em;
  }
}

</style>
