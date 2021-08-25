<template>
  <div class="results"> 
      
      <p> Your score = {{ results.toFixed(3) }} ms </p>
      <p class="rank"> You are a ... {{ rank }} </p>

  </div>
</template>

<script>
export default {
    props: ['results'],
    data() {
        return {
            rank: null
        }
    },
    mounted() {
        if (this.results < 250) {
            this.rank = 'Boss !';
        } else {
            this.rank = 'Loser !'
            }
    },
}
</script>

<style>
.rank {
   font-size: 1.4em;
   color: #0faf87;
   font-weight: bold; 
}
</style>