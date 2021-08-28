<template>
    <h1> Jobs ici </h1>
    <JobsLents />
    <JobsRapides />
    
</template>

<script>
import JobsLents from './JobsLents.vue'
import JobsRapides from './JobsRapides.vue'

export default {
    components: { JobsLents, JobsRapides },
    data() {
        return {
        }
    },
    // mounted() {
    //     fetch('http://localhost:3000/jobs')
    //     .then( res => res.json())
    //     .then(data => this.jobs = data)
    //     .catch(err => console.log(err.message));    
        
    // }
    
      
}
</script>

<style>

</style>