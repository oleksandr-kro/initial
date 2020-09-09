<template>
<div>
  <p>{{index+1}}  {{todo.inputValue}} <input type="submit" @click="remove" value="Delete Todo"></p>

</div>
</template>

<script>
import {todolistModule} from "@/store/todolist/todolist";
import {DELETE_TODO} from "@/store/todolist/types";
import {createNamespacedHelpers} from "vuex";


const {mapActions} = createNamespacedHelpers(todolistModule)
export default {
  name: "TodoItem",
  props:{
    todo:{
      type:Object
    },
    index:{
      type: Number
    }
  },
  methods:{
    ...mapActions({
      deleteTodo: DELETE_TODO
    }),
  async  remove(){
      try {
        await this.deleteTodo(this.todo.id)
      }
      catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>