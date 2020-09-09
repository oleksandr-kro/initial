import {ADD_TODO, DELETE_TODO, GET_TODOS, PUSH_TODO, PUSH_TODOS, REMOVED_TODO} from "@/store/todolist/types";

import Vue from 'vue'
import {url} from "@/main";

export const actions ={
[ADD_TODO]: async ({commit},todo)=> {
    try {
    const {body:{name}} = await Vue.http.post(url, todo)
    const todoItem ={...todo, id:name};
    commit(PUSH_TODO,todoItem)
    }
    catch (e) {
        console.error(e)
    }
},
[GET_TODOS]: async ({commit})=>{
    try {
        const todoArr =[];
      const {body} =  await Vue.http.get(url)
        for (let item in body){
            todoArr.push({...body[item], id:item})

        }
        commit(PUSH_TODOS, todoArr);
    }
    catch (e) {
        console.log(e)
    }
},
    [DELETE_TODO]: async  ({commit},id )=> {
    try {
        await Vue.http.delete(`https://myfirstproject-895a7.firebaseio.com/todolist/${id}.json`)
        commit(REMOVED_TODO,id)
    }
    catch (e) {
    console.log(e)
}

}
}