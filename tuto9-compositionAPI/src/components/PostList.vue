<template>
  <div class="post-list">
    <!-- <div v-if="!posts.length"> 
      <p>loading ...</p>
    </div> -->
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
import SinglePost from './SinglePost.vue'

export default {
  props: ['posts'],
  components: { SinglePost },
  setup(props) {
    function whatToDoWhenMounted() {
      console.log("Post List mounted !");
    }
    
    function whatToDoWhenUnmounted() {
      console.log("Post List unmounted !");
    }

    function whatToDoWhenUpdated() {
      console.log('Post List Updated !')
    }


    onMounted(whatToDoWhenMounted);
    onUnmounted(whatToDoWhenUnmounted);
    onUpdated(whatToDoWhenUpdated);

},
}
</script>

<style>

</style>