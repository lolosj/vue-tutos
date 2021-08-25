<template>
  <h1> hello</h1>
  <button :disabled="isPlaying"  @click="start()">start</button>
  <Block 
    v-if="isPlaying" 
    :delay="delay"
    @endOfGame="stop" />

  <Results 
    v-if="showResults" 
    :results="score"/>

</template>

<script>

import Block from './components/Block.vue';
import Results from './components/Results.vue'

export default {
  name: 'App',
  components: { Block, Results },
  data () {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: null,
    }
  },
  methods : {
    start() {

      this.isPlaying = true;
      this.showResults = false;
      this.delay = 2000 + Math.random() * 2000;
      console.log(this.delay);
    },

    stop(finalScore) {
      this.isPlaying = false;
      console.log(`finished ! ${finalScore}`);
      this.score = finalScore;
      this.showResults = true;
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
  height: 600px;
  width: 600px;
  border: 1px solid;
  margin: auto;

}
</style>
