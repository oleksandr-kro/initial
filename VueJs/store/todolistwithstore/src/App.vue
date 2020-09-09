<template>
  <div>
    <h1>Todo</h1>
    <AddTodo/>
    <TodoList/>
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import {todolistModule} from "@/store/todolist/todolist";
import {GET_TODOS} from "@/store/todolist/types";


export default {
  name: 'App',
components:{
  AddTodo,
  TodoList
},
async  beforeMount() {
    try {
      await  this.$store.dispatch(`${todolistModule}/${GET_TODOS}`)
    }catch (e) {
      console.log(e)
    }

  }
}
</script>

<style>

</style>
