import {Component, Input, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {Post} from "../../modules/post/post.module";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent {

posts:Post[]

  constructor(private postService:PostService) {
    this.postService.getPosts().subscribe(value => this.posts=value)
  }



}
