import { Component, OnInit } from '@angular/core';
import {Todo} from "../../modules/todo/todo.module";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent {

  selectedTodo:Todo

  constructor( private router:Router, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe( (params) => {
      this.selectedTodo = history.state.detailedTodo
    })

  }

}
