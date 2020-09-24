import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";
import {Comment} from "../../modules/coment/coment.module";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent  {
singleComment:Comment;
@Input()
comment:Comment
  constructor(private activatedRoute: ActivatedRoute, private postService:PostService) {
    this.activatedRoute.params.subscribe(value => {
      this.postService.getCommentOfPostWithId(value.id).subscribe(data=> this.singleComment=data

      )
    })
  }


}
