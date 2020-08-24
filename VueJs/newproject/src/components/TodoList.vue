<template>
  <div>
    <h1>TodoList</h1>

    <div v-for="(todo,index) in todoArr" :key="index">
      <TodoItem
          :todo="todo"
          :index="index"
          @indexRemoveTodo="remove"
      >

      </TodoItem>
    </div>


  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
name: "TodoList",
  props:{
    todoArr: {
      type: Array,
      required: true
    },
  },
  components:{
    TodoItem
  }
  ,
  methods:{
    remove(event){
      this.$emit('removeTodo', event)

    }
  }
}
</script>

<style scoped>

</style>