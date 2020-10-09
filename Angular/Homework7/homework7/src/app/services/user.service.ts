import {Injectable, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaices/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

 async getUserById(id:string): Promise<User> {
   const  result = await this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).toPromise()
   return result
  }

}
