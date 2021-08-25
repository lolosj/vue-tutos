<template>
  <div class="block" v-if="showBlock" @click="stopTimer()">
      click me 
  </div>
</template>

<script>

    import axios from 'axios';
    var now = require("performance-now")


    export default {
        props: ['delay'],
        data() {
            return {
                showBlock: false,    
                reactionTime: 0,
                start: 0,
            }
        },
        mounted() {
            console.log(`mounted (${this.delay}ms)`);
            setTimeout(() => { 
                console.log(`OK ! on showblock = true`);
                this.showBlock = true;
                this.startTimer();  
                }, this.delay)
        },
        methods: {
            startTimer() {
                // this.timer = setInterval(() => {
                //     this.reactionTime += 10;
                // }, 10);
                
            this.start = now();

            },

            stopTimer() {
                let end = now();
                let reactionTime = end - this.start;
                //clearInterval(this.timer)
                console.log(`resultat = ${reactionTime}`);
                this.$emit('endOfGame', reactionTime);

            },
        }
    }

</script>

<style>
.block {
    background: #0faf87;
    border-radius: 20px;
    width: 400px;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
}
</style>