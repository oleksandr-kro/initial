import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {Comment} from "../../modules/comment/comment.module";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  comments:Comment
  @Input()
  comment:Comment
  constructor( private commentService:CommentService) {
    this.commentService.getComments().subscribe(value => this.comments = value)
  }


}
