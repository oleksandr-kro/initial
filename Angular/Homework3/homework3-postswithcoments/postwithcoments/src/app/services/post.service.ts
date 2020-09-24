import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }
  getPost(): Observable<any[]> {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts')
  }


  getComentsWithIdPost(id: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
  }
  getComents():Observable<any[]> {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/comments')
  }


}
