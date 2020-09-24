import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

todo = {
  action:''
}
// url='https://myfirstproject-895a7.firebaseio.com/todo';


  constructor(private http:HttpClient) { }

  getUsers(): Observable<any[]>{
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')

  }

}
