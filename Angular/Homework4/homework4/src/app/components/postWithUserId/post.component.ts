import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Post} from "../../modules/post/post.module";
import {ActivatedRoute, Route} from "@angular/router";



@Component({
  selector: 'app-user',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{

  posts:Post[];
  constructor (private userService:UserService, private route: ActivatedRoute) {
    this.route.params.subscribe(
  value => this.userService.getPostsofUserId(value.id).subscribe(data=>
  this.posts =data
  ))
  }

}
