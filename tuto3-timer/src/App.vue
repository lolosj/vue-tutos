<template>

  <div id="containerheader">

    <img alt="Truffle Pig !" src="./assets/logo2.jpg">

    <h1>{{ title }}</h1>

    <input type="text" ref="inputlolo">
    <button @click="clickButton()">click here</button>
  </div>   

  
  
  <div v-if="showModal">
    <Modal :titre="titreLolo" 
      :lolo="arrayVar" 
      theme='special' 
      @closeModalEvent="toggleModal()">
    <template v-slot:slotName>

      <p>this is a slot</p>
      <p>yes this is a slot</p> 
    </template>
    </Modal>
  </div>

  
  
  <div v-if="showModal2">
    <Modal :titre="titreLolo" 
      :lolo="arrayVar" 
      @closeModalEvent="toggleModal2()">
    <template v-slot:slotName>

      <p>this is 2222222222</p>
       
    </template>




    </Modal>
      

  </div>

  <button @click="toggleModal()">toggle modal!</button>
  <button @click="toggleModal2()">toggle RED modal!</button>

</template> 




<script>

import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'Pigboard Frontend',
      titreLolo: 'titrre ici',
      arrayVar: [1, 5, 78],
      showModal: false,
      showModal2 : false,
    }; 
  },
  methods: {
    clickButton() {
      console.log(this.$refs.inputlolo.value);
      this.$refs.inputlolo.classList.add('active');
      this.$refs.inputlolo.focus();

    },

    toggleModal() {
      this.showModal = !this.showModal;
    },

    toggleModal2() {
      this.showModal2 = !this.showModal2;
    }
  },

    

}
</script>

<style>
#containerheader {
  max-width: 444px;
  margin: auto;
  border-bottom: 1px solid;
  padding-bottom: 15px;
  margin-bottom: 40px;
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
  display: block;
  color: black !important;
}

.modal.specialtheme {
    border: 5px solid;
}
</style>
