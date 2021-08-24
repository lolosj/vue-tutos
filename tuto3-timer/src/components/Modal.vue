<template>
    <div class="backdrop" @click.self="closeModal()">
        <div class="modal" 
            :class="{specialtheme : theme === 'special' }">
                <h1> {{ titre }} </h1>
                <p v-for="a in lolo"> {{ a }} </p>
                <slot name="slotName"></slot>
        </div>
    </div>
</template> 

<script>
export default {
    props: ['titre', 'lolo', 'theme'],
    methods: {
        closeModal()  {
            this.$emit('closeModalEvent');
            console.log("Event emited : close Modal !")
        },

    }
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