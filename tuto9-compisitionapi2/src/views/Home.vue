<template>
  
  <div class="home">
    
    <h1>home</h1>
    

    <h3>Post List</h3>
    
    <div v-if="error">
      <p>Erreur :( ({{ error }})</p> 
    </div>
    
    <div v-else>

      <div v-if="posts.length">
        <PostList v-if="!error && showPosts" :posts="posts" />
      </div>
    
      <div v-else >
        Loading ...
      </div>
    </div>

    <button @click="toggleShowPosts" >toggle posts</button>
    <button @click="deletePost" >delete post</button>

  </div>


</template>

<script>

import PostList from '../components/PostList.vue'

// @ is an alias to /src
import { ref } from 'vue'

const url = 'http://localhost:3000/posts';
import axios from 'axios' 

export default {
  components: { PostList },
  name: 'Home',
  setup() {
    const posts = ref([]);
    const error = ref(null);

    const showPosts = ref(true);

    function toggleShowPosts() {
      showPosts.value = !showPosts.value;
    }

    function deletePost() {
      posts.value.pop();
    }

    async function load() {
      try {
        let data = await fetch(url);
        if (!data.ok) {
          console.log('prout throw error');
          throw Error('no data available');
        }
        posts.value = await data.json(); 
        //console.log(data);
      }
      catch (err) {
        error.value = err.message;
        console.log("Erreur :", error.value);
      }
    }

    async function load2() {
       try {
        
      
        
        
        let data = await axios.get(url);
        // if (!data.ok) {
        //   console.log('prout throw error');
        //   throw Error('no data available');
        // }
        const results = data.data;
        posts.value = results;
        //console.log(results);
      }
      catch (err) {
        error.value = err.message;
        console.log("Erreur :", error.value);
      }
    }


    //load();
    load2();
    return {
      posts,
      showPosts,
      toggleShowPosts,
      deletePost,
      error
    }
  }
}

</script>

