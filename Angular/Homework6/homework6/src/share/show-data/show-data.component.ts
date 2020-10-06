import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../../app/services/subject.service";
import {User} from "../../app/user/interfaces";
import {Post} from "../../app/post/interfaces";
import {Comment} from "../../app/comment/interfaces";

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  userData:Partial<User>
  postData:Partial<Post>
  commentData:Partial<Comment>

  constructor(private subjectService:SubjectService) { }

  ngOnInit(): void {
    this.userData = this.subjectService.getUser();
    this.postData = this.subjectService.getPost();
    this.commentData = this.subjectService.getComment();
  }

}
