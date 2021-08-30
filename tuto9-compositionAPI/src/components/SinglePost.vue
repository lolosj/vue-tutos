<template>
  <div class="single-post">
    <h3>{{ post.title }}</h3>
    <p> {{ excerpt }} </p>
    <p> {{ excerpt2 }} </p>
  </div>
</template>

<script>
import { computed } from 'vue';
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'

export default {
  props: ['post'],
  setup(props) {
    function whatToDoWhenMounted() {
      console.log("Single Post mounted !");
    }

    function whatToDoWhenUnmounted() {
      console.log("Single Post unmounted !");
    }

    function whatToDoWhenUpdated() {
      console.log('Single Post Updated !')
    }

    onMounted(whatToDoWhenMounted);
    onUnmounted(whatToDoWhenUnmounted);
    onUpdated(whatToDoWhenUpdated);

    const excerpt = props.post.body.substring(1, 20) + ' ...';

    function getExcerpt() {
      return props.post.body.substring(1, 20) + ' ...';
    }

    const excerpt2 = computed(getExcerpt);
    
    return { 
      excerpt,
      excerpt2, 
    };
  }
}
</script>

<style>

</style>


