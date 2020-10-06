import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../interfaces";
import {SubjectService} from "../../../services/subject.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment:Comment;

  constructor(private subjectService:SubjectService) { }

  ngOnInit(): void {
  }

  saveComment(comment: Comment) {
  this.subjectService.setComment(comment)
  }
}
