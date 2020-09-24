import {Component, Input, OnInit} from '@angular/core';
import {PostService} from "../../../services/post.service";
import {Post} from "../../../models/post";
import {Coment} from "../../../models/coment/coment.module";
import {PostComponent} from "../../post/post/post.component";


@Component({
  selector: 'app-coments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})


export class CommentsComponent {
  @Input()
  comment:Coment
comments:any[];
post:Post


  constructor(private postService:PostService) {
     this.postService.getComentsWithIdPost().subscribe(value => console.log(value))
  }





}
