import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../interfaces/post";
import {FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private  httpClient:HttpClient) { }

  getPostWithUserId(id: FormControl):Observable<Post>{
    return this.httpClient.get<Post>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
