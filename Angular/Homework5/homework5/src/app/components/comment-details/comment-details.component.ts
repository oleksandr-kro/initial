import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../../services/comment.service";
import {Comment} from "../../modules/comment/comment.module";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent {
selectedComment:Comment;


  constructor(private activatedRoute: ActivatedRoute, private commentService:CommentService) {
    this.activatedRoute.queryParams.subscribe(value =>

      this.commentService.getCommentsById(value.commentId).subscribe( data=> this.selectedComment=data)
    )
  }



}
