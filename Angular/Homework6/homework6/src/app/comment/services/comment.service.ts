import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  URL:string= `https://jsonplaceholder.typicode.com/comments`;
  constructor(private  httpClient:HttpClient) { }
  getAllComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`${this.URL}`)
  }
}
