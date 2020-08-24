<template>
<div class="form">
  <h1>Form</h1>
  <input  type="email" v-model="submitData.email">
  <label for="email">Enter your email</label>
  <br>
  <input type="password" v-model="submitData.password">
  <label for="password">Enter your password</label>
  <br>
  <input type="radio" value="male" v-model="submitData.gender">
<label for="male"> Male</label>
  <input type="radio" value="female" v-model="submitData.gender">
  <label for="female"> Female</label>
  <br>
  <input type="submit" @click="submitForm">
</div>
</template>

<script>
export default {
name: "Form",
  data(){
  return{

    submitData:{
      email:'',
      password:'',
      gender:''
    }
  }
  },
  methods: {
    submitForm() {
      console.log(`
      password:${this.submitData.password}
      mail:${this.submitData.email}
      gender:${this.submitData.gender}
      `),
      this.submitData='';
    }
  }
}
</script>

<style scoped>
.form {
  width: 400px;
  height: 400px;
  border: 1px solid black;
  font-size: 25px;
}
</style>