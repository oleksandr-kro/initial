import { Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../../modules/post/post.module";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
detailedPost:Post
  constructor( private router:Router, private activatedRoute:ActivatedRoute) {
  this.activatedRoute.params.subscribe( (params) => {
    this.detailedPost = history.state.sPost
  })

  }


}
