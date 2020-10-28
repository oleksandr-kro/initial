import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private  httpClient:HttpClient) {    }
      getUser(id):Observable<User>{
        return this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);


  }
}
