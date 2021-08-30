<template>
    <div v-if="error">error :( {{ error }}</div>
    <div v-if="post">
        <h1>{{post.title}}</h1>

        <p>{{post.body}}</p>
        <span v-for="tag in post.tags" :key="tag">
          #{{tag}}
        </span>
    </div>
</template>

<script>

import getPost from '../composables/getPost.js'

export default {
    props: ['id'],
    setup(props) {
        const { post, error, load2} = getPost(props.id);
        load2();
    return { post, error }
    }
}

</script>

<style>

</style>