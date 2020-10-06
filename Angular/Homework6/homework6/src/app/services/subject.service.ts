import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../user/interfaces";
import {Post} from "../post/interfaces";
import {Comment} from "../comment/interfaces";


@Injectable({
  providedIn: 'root'
})
export class SubjectService {


private userData:BehaviorSubject<Partial<User>> = new BehaviorSubject<Partial<User>>({});
private postData:BehaviorSubject<Partial<Post>> = new BehaviorSubject<Partial<Post>>({});
private commentData:BehaviorSubject<Partial<Comment>> = new BehaviorSubject<Partial<Comment>>({});

  constructor() { }
  setUser(user:User): void {
    this.userData.next(user);
      }
  getUser(): Partial<User> {
  return  this.userData.getValue()
  }

  setPost(post:Post): void {
    this.postData.next(post);
  }
  getPost(): Partial<Post> {
    return  this.postData.getValue()
  }
  setComment = (comment:Comment): void => {
    this.commentData.next(comment);
  };
  getComment(): Partial<Comment> {
    return  this.commentData.getValue()
  }



}
