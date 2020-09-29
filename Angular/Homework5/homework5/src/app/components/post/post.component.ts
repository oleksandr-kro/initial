import {Component, Input, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {Post} from "../../modules/post/post.module";
import {User} from "../../modules/user/user.module";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
posts:Post

  @Input()
  post:Post
  constructor( private postService:PostService) {
    this.postService.getPost().subscribe(value => this.posts=value)
  }


}
