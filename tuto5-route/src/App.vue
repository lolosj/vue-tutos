<template>
  <div id="nav">
    <router-link :to="{name: 'Home'}">Home</router-link> |
    <router-link :to="{name: 'About'}">About</router-link> |
    <router-link :to="{name: 'Jobs'}">Jobs</router-link> |


  </div>
  
  <button @click="back()">back</button>
  <button @click="redirect()">redirect</button>
  <button @click="forward()">forward</button>

  <router-view/>
  
</template>
<script>

export default {
  
  methods: {
    
    back() {
      this.$router.go(-1);
    },

    redirect() {
      //
      this.$router.push({name: "Home"});
    },
    
    forward() {
          this.$router.go(1);

    },
  }
  
}
// import Jobs from './views/Jobs.vue'
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
button {
  margin : 10px 10px;
  border-radius: 10px;
  padding: 10px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: white;
  background-color: #42b983;
}
</style>
