import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../interfaices/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }
  async getPostbyUserId(id:string): Promise<Post[]> {
    return await this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).toPromise()
  }

}
