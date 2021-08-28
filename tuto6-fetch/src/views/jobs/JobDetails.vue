<template>
  <h1> Job Details Page </h1>
  <div v-if="job">
    <p> {{ job.name }} </p>
    <p> {{ job.description }} </p>
  </div>
  <div v-else>
  <p> loading ... </p>
  </div>
</template>

<script>
export default {
    // data() {
    //     return {
    //         jobId: this.$route.params.id
    //     }
    // },
    data() {
      return {
        job: null
      }
    },
    props: ['id'],
    mounted() {
      
      if (this.id.startsWith('lent_')) {

        fetch('http://localhost:3000/jobs/' + this.id)
          .then( res => res.json())
          .then(data => this.job = data)
          .catch(err => console.log(err.message));    
      } else {
        fetch('http://localhost:3001/jobs/' + this.id)
          .then( res => res.json())
          .then(data => this.job = data)
          .catch(err => console.log(err.message));        
          }
      }
}
</script>

<style>

</style>