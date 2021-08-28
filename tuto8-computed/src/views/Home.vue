<template>
  <div class="home">
  home
  <input type="text" v-model="search">
  <p> {{ search }}</p>
 
  <div v-for="name in names" :key="name">
    <p> {{ name }}</p> 
  </div>
  <p>--</p>

  <div v-for="name in matchingNames" :key="name">
    <p> {{ name }}</p> 
  </div>

  <button @click="stopWatching">stop watching</button>


</div>

</template>

<script>
// @ is an alias to /src
import { ref, computed, watchEffect } from "vue"

export default {
  name: 'Home',
  setup() {
    const search = ref('')
    const names = ref(['mario','lolo','lola']);



     
    const stopWatch = watchEffect(() => {
      console.log('watchEffect function', search.value)
    })

    function stopWatching() {
      console.log('stop watching');
       stopWatch(stopWatch)
     
    }

    function filterNames() {
      return names.value.filter((name) => {
        return name.includes(search.value);
      })
      
    }

    const matchingNames = computed(filterNames);
    //computed(() => {
    //   return names.value.filter((name) => name.includes(search.value))
    // })
    return { 
      names,
      search,
      matchingNames,
      stopWatching,
      filterNames
    }
}}
</script>
