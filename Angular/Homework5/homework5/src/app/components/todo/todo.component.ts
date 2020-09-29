import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {Todo} from "../../modules/todo/todo.module";
import {ActivatedRoute, Router} from "@angular/router";
import {state} from "@angular/animations";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent{
todos:Todo

  @Input()
  todo:Todo
  constructor(private todoService: TodoService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.todoService.getTodo().subscribe( value => this.todos=value)
  }
  showUser(todo: Todo) : void {

  this.router.navigate(['details', todo.id], {state:{detailedTodo:todo} , relativeTo: this.activatedRoute})
  }

}
