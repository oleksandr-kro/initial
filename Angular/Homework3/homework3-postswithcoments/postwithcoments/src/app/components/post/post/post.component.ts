import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../models/post";
import {PostService} from "../../../services/post.service";
import {Coment} from "../../../models/coment/coment.module";



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {
  @Input()
  post:Post


  constructor(private postService:PostService) {
    
  }

  getPostId(post):void{
  this.postService.getComentsWithIdPost(post.id).subscribe( )
  }





}
