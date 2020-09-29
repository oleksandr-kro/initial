import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../modules/post/post.module";
import {Comment} from "../modules/comment/comment.module";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor( private httpClient: HttpClient) { }
  getComments(): Observable<Comment> {
    return this.httpClient.get<Comment>(`https://jsonplaceholder.typicode.com/comments`)
  }
  getCommentsById(id:number): Observable<Comment> {
    return this.httpClient.get<Comment>(`https://jsonplaceholder.typicode.com/comments/${id}`)
  }
}
