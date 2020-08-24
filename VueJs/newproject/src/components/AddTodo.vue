<template>
<div>
  <h1>Addtodo</h1>
  <input  type="text"  v-model="inputValue">
  <input type="submit"  @click="add" v-if="todoArr.length<10">
</div>
</template>

<script>
export default {
name: "AddTodo",
  props:{
    todoArr: {
      type: Array,
      required: true
    }},
 data (){
  return {
  inputValue :'',
  }
 },
  methods:{
add(){
this.$emit('inputValue', this.inputValue)
  this.inputValue =''
}
  }
}

</script>

<style scoped>

</style>