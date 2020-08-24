<template>
<div class="todoForm">
<span>
  <input type="submit" value="Remove" @click="removeTodo">

  {{index+1}} {{todo.action}}
</span>
</div>
</template>

<script>
export default {
name: "TodoItem",
  props: {
    todo: {
      type:Object,
      required: true
    },
    index: {
      type:Number,
      required: true
    },

  },
  methods:{
    removeTodo(){
      this.$emit('indexRemoveTodo', this.index)
    }
  }
}

</script>

<style scoped>
.todoForm {
  font-size: 25px;
}
</style>