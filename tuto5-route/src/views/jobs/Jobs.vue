<template>
    <h1> Jobs </h1>
    <div class="job" v-for="job in jobs" :key="job.id">
    <router-link :to="{name: 'JobDetails', params : {id: job.id}}">
         <h2> {{ job.name }} - {{ job.description }}</h2>
    </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                {name: "pompier", id: 1, description: "eteint le feu"},
                {name: "policier", id: 2, description: "eteiadsfdsfdsfadsfasdfasdfasdfu"},
                {name: "fermier", id: 3, description: "adsf asd asd"},
            ]
        }
    },
      
}
</script>

<style>
.job h2 {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
}

.job h2:hover {
    background-color: #aaa;
}

.job a { 
    text-decoration: none;
}
</style>