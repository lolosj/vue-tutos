<template>
    <h1> Jobs Lents </h1>
    <div v-if="jobsLents.length">
        <div class="job" v-for="job in jobsLents" :key="job.id">
        <router-link :to="{name: 'JobDetails', params : {id: job.id}}">
            <h2> {{ job.name }} - {{ job.description }}</h2>
        </router-link>
        </div>
    </div>
    <div v-else> <p> Loading jobs Lents ... </p>
    </div>

</template>

<script>
const urlLent = 'http://localhost:3000/jobs';
import axios from 'axios' 

export default {
    data() {
        return {
            jobsLents: [],
        }
    },
    // mounted() {
    //     fetch('http://localhost:3000/jobs')
    //     .then( res => res.json())
    //     .then(data => this.jobs = data)
    //     .catch(err => console.log(err.message));    
        
    // }
    async mounted() {
        const jobsLentsRequest = await axios.get(urlLent);
        
        const results = jobsLentsRequest.data;
      
        this.jobsLents = results;
    }
    
      
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