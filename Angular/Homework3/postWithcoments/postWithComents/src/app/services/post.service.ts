import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../modules/post/post.module";
import {Comment} from "../modules/coment/coment.module";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`)
  }

  getCommentOfPostWithId(id:string):Observable<Comment> {
    return this.httpClient.get<Comment>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }
}
