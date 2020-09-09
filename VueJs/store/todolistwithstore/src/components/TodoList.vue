<template>
  <div>
      <ul>
          <li v-for="(todo, i) in todolist " :key="i">

            <TodoItem :todo="todo" :index="i"/>

          </li>

      </ul>
  </div>
</template>

<script>
import {todolistModule} from "@/store/todolist/todolist";
import {createNamespacedHelpers} from "vuex";
import {TODOS} from "@/store/todolist/types";
import TodoItem from "@/components/TodoItem";

const {mapGetters}=createNamespacedHelpers(todolistModule)
export default {
  name: "TodoList",
  components:{
    TodoItem
  },
  computed:{
...mapGetters({
  todolist: TODOS
})
  }
}
</script>

<style scoped>
li{
  list-style: none;
}
</style>