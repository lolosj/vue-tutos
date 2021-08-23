<template>
    <div class="backdrop">
        <div class="modal">
            <h1> {{ titre }} </h1>
            https://www.youtube.com/watch?v=KM1U6DqZf8M&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=5 15m41
            <p v-for="a in lolo"> {{ a }} </p>
        </div>
    </div>
</template> 

<script>
export default {
    props: ['titre', 'lolo', 'theme']
}

</script>

<style>
.modal {
    width: 400px;
    padding: 20px;
    margin: 400px auto;
    background: white;
    border-radius: 10px;
}

.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%; 
    height: 100%;
    margin: auto;
} 

.modal h1 {
 border-bottom: none;
  display: block;
  padding-bottom: 10px;
  color: #03cfb4 !important;
}

</style>