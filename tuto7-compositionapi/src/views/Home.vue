<template>
  <div class="home">
    home
    <p ref="paragraph">my name is {{ name }} - {{ age }}</p>
    <button @click="handleClick()">Click Me</button>
    <button @click="age++">Click Me</button>

    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref, reactive} from '@vue/reactivity';


export default {
  name: 'Home',
  setup () {

    const paragraph = ref(null);
    let name = ref("lolo");
    let age = ref(37);

    name.value = "test";
    
    

    function handleClick() {
      name.value = 'lala';
    
      //paragraph.value.classList.add("test");
      //paragraph.value.textContent = "changed value";

    }
  
    return {
      name,
      age,
      handleClick,
      paragraph
    }
},

  
}
</script>
