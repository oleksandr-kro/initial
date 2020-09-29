import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../modules/user/user.module";
import {Todo} from "../modules/todo/todo.module";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) {
  }

  getTodo(): Observable<Todo> {
    return this.httpClient.get<Todo>(`https://jsonplaceholder.typicode.com/todos`)
  }
}
