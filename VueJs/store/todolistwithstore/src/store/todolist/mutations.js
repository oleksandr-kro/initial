import {REMOVED_TODO,PUSH_TODO, PUSH_TODOS} from "@/store/todolist/types";


export let mutations;
mutations = {
    [PUSH_TODO]: (state, todo) => {
        state.todolist.push(todo);
    },
    [PUSH_TODOS]: (state, todoArr) => {
        state.todolist= todoArr
    },
    [REMOVED_TODO]: (state, id) => {
state.todolist = state.todolist.filter(e=>e.id !== id)
    }
};