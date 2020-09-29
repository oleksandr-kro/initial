import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../modules/post/post.module";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( private httpClient: HttpClient) { }
  getPost(): Observable<Post> {
    return this.httpClient.get<Post>(`https://jsonplaceholder.typicode.com/posts`)
  }
}
