import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { PostComponent } from './components/post/post.component';
import {PostService} from "./services/post.service";
import {HttpClientModule} from "@angular/common/http";
import {PostRoutingModule} from "./post-routing.module";
import {ShareModule} from "../../share/share.module";



@NgModule({
  declarations: [AllPostsComponent, PostComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PostRoutingModule,
    ShareModule
  ],
  providers:[PostService]
})
export class PostModule { }
