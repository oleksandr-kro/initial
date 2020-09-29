import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../modules/user/user.module";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private httpClient:HttpClient) { }

  getUser():Observable<User>  {
  return   this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users`)
  }
  getUserById(id:number):Observable<User>  {
    return   this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }




}
