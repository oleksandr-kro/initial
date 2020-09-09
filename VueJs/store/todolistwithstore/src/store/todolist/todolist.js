import {state} from "@/store/todolist/state";
import {getters} from "@/store/todolist/getters";
import {actions} from "@/store/todolist/actions";
import {mutations} from "@/store/todolist/mutations";

const namespaced =true;

export const todolistModule = 'todolist';

export const todolist ={
    namespaced,
    state,
    actions,
    getters,
    mutations,
}
