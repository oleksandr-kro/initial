<template>
<div>
  <input type="text" v-model="inputValue">
  <button @click="add">Add todo</button>
</div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
import {todolistModule} from "@/store/todolist/todolist";
import {ADD_TODO} from "@/store/todolist/types";

const{mapActions} = createNamespacedHelpers(todolistModule);
export default {
name: "AddTodo",
  data(){
  return {
    inputValue:''
  }
  },
  methods:{

  ...mapActions({
    addTodo:ADD_TODO
  }),

  async    add(){
    try {
      const todo ={
        inputValue: this.inputValue
      }
      await this.addTodo(todo);
      this.inputValue ='';
    }catch (e) {
      console.log(e)
    }
  }
    }


}
</script>

<style scoped>

</style>