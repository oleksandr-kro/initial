import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../modules/user/user.module";
import {Post} from "../modules/post/post.module";
import {Comment} from "../modules/comment/comment.module";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  getAllUsers():Observable<User[]> {
  return   this.httpClient.get<User[]>(`https://jsonplaceholder.typicode.com/users`)
  }
  getPostsofUserId(id:number):Observable<Post[]> {
    return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  }
  getCommentsofPostId(id:number):Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
  }

}
