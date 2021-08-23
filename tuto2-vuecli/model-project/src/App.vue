<template>
 <div id="containerheader">
  <img alt="Truffle Pig !" src="./assets/logo2.jpg">
  <h1>{{ title }}</h1>
</div>   

<input type="text" ref="inputlolo">
<button @click="clickButton()">click here</button>
<Modal :titre="titreLolo" :lolo="arrayVar" theme="sale"/>
</template> 


<script>

import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'Pigboard Frontend',
      titreLolo: 'titre ici',
      arrayVar: [1, 5, 78],
    }; 
  },
  methods: {
    clickButton() {
      console.log(this.$refs.inputlolo.value);
      this.$refs.inputlolo.classList.add('active');
      this.$refs.inputlolo.focus();

    }
  },
}
</script>

<style>
#containerheader {
  max-width: 444px;
  margin: auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: auto;
}

h1 {
  border-bottom: 1px solid;
  display: block;
  padding-bottom: 10px;
  color: black !important;
}
</style>
