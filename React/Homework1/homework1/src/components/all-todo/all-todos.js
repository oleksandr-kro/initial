import React, {Component} from 'react';
import {todoArr} from "../../todos/data";
import Todo from "../todo/todo";

class AllTodos extends Component {
    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <div>
                    {

                    todoArr.map((item,index)=>{
                        return (<Todo todo={item} key={index}/>)
                    })
                }
                </div>

            </div>
        );
    }
}

export default AllTodos;
