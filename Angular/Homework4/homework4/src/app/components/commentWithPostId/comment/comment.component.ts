import { Component} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {Comment} from "../../../modules/comment/comment.module";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent{

  comments:Comment[]

  constructor(private userService:UserService, private route:ActivatedRoute) {
    this.route.params.subscribe(value =>
    this.userService.getCommentsofPostId(value.id).subscribe(data=> this.comments = data)
    )
  }



}
