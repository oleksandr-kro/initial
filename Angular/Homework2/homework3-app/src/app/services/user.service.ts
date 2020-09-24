import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private HttpClient: HttpClient) {
    getUsers:Observable<any[]>() {
      this.HttpClient.get<any[]>('https://jsonplaceholder.typicode.com/todos')
    }
  }
}
