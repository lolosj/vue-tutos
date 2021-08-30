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


import getPosts from '../composables/getPosts.js'
export default {
  components: { PostList },
  name: 'Home',
  setup() {

    const showPosts = ref(true);

    function toggleShowPosts() {
      showPosts.value = !showPosts.value;
    }

    function deletePost() {
      posts.value.pop();
    }

    const { posts, error, load, load2 } = getPosts();
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

