import Vue from 'vue'
import Vuex from 'vuex'
import {todolist, todolistModule} from "@/store/todolist/todolist";

Vue.use(Vuex);

export const store = new Vuex.Store({
modules:{
    [todolistModule]: todolist
}
})