<template>
    <form @submit.prevent="submitForm()">
        <label>Email:</label>
        <input type="email" required v-model="emailAddress">

        <label>Password:</label>
        <input type="password" required v-model="password"> 
        <div class="error" v-if="passwordError"> {{ passwordError}} </div>
  
        <label> Role: </label>
        <select v-model="option">
            <option value="option1">Option1</option>
            <option value="option2">Option2</option>
        </select>


        <label>Skiils</label>
        <input type="test" v-model="tempSkill" @keyup="addSkill">

        <div  v-for="skill in skills" :key="skill" class="skills" @click="deleteSkill(skill)">  
            {{ skill }}
        </div>

        <div class="terms">
            <input type="checkbox" required v-model="checkedBox">
            <label>Accept terms and conditions wesh !</label>
        </div>



        <!-- <div>
            <input type="checkbox" value="Lolo1" v-model="names">
            <label>Lolo1</label>
        </div>

        <div>
            <input type="checkbox" value="Lolo2" v-model="names">
            <label>Lolo2</label>
        </div>

        <div>
            <input type="checkbox" value="Lolo3" v-model="names">
            <label>Lolo3</label>
        </div>
 -->



    <div class="submit"> 
        <button>Create Account</button>
    </div>

    </form>
    
    <p> Email: {{ emailAddress }}</p>
    <p> Password:  {{ password }}</p>
    <p> Option: {{ option }}</p>
    <p> Accepted ? {{ checkedBox }}</p>
    
    
    <!-- <p> Lolos : {{ names }}</p> --> 

</template>

<script>

export default {
    data() {
        return {
            emailAddress: '',
            password: '',
            option: '',
            checkedBox: false,
            tempSkill: "",
            skills: [],
            passwordError: '',
            // names: ['test'],
        };
    },

    methods: {
        
        
        addSkill(event) {
            if (event.key === ',' && this.tempSkill) {
                let skillToAdd = this.tempSkill.substring(0, this.tempSkill.length - 1)
                if (!this.skills.includes(skillToAdd)) {
                    this.skills.push(skillToAdd);
                }
            this.tempSkill = '';
            }
        },

        deleteSkill(skillToDelete) {
            this.skills = this.skills.filter((skillItem) => {
                if (skillItem !== skillToDelete) {
                    return true;
                }
            });
        },

        submitForm() {
            console.log('form submitted');
            this.passwordError = this.password.length < 5 ? 'error password too short' : '' ;

            if (!this.passwordError) {
                console.log(this.emailAddress, this.password)
            }
        }



    },
}

</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0px 15px;
    font-size: 0.72em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: 0;
    border-bottom: 1px solid #ddd;
    color: #555;
    background-color: white;
}

input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position:relative;
    top: 2px;
}
.skills {
    display:inline-block;
    margin: 20px 10px 0 0 ;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
.submit {
    text-align: center;
}
.error {
    color: #ff0062;
    font-size: 0.72em;
    font-weight: bold;
    margin-top: 15px
}
</style>