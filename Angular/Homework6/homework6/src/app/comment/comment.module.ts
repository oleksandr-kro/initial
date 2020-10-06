import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { CommentComponent } from './components/comment/comment.component';
import {CommentService} from "./services/comment.service";
import {HttpClientModule} from "@angular/common/http";
import {CommentRoutingModule} from "./comment-routing.module";
import {ShareModule} from "../../share/share.module";



@NgModule({
  declarations: [AllCommentsComponent, CommentComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CommentRoutingModule,
    ShareModule
  ],
  providers:[CommentService]
})
export class CommentModule { }
