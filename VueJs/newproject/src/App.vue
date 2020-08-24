<template>
  <div>

<AddTodo
    :todoArr="todoArr"
    @inputValue="addNewTodo"
>
</AddTodo>
<TodoList
    :todoArr="todoArr"
    @removeTodo ="removeTodo"
>
</TodoList>
<Form/>
  </div>
</template>

<script>

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Form from "@/components/form/Form";

export default {
  name: 'App',

  components: {
    Form,
    AddTodo,
    TodoList,

  },

  data(){
    return {
      todoArr: [
        {action: 'to do exercising' },
        {action: 'take a rest' }
      ]
    }
  },

  methods:{

    addNewTodo(event) {
      let newObject = {action:event}
      this.todoArr.push(newObject)
    },

    removeTodo(event){
      console.log(event)
      this.todoArr.splice(event, 1)
    }
  }

}
</script>

<style scouped>

</style>
