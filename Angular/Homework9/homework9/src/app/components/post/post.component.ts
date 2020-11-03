import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";
import {log} from "util";
import {Observable} from "rxjs";
import {Post} from "../../interfaces/post";



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id = new FormControl(1, [
    Validators.maxLength(1),
    this.validator
  ]);
  postId = new FormControl(1)
  myForm = new FormGroup({
    id: this.id,
    postId: this.postId
  });
posts:Post;

@Input()
post:Post;




  constructor(private postService: PostService) {

  }

  getPosts(id: FormControl){
    this.postService.getPostWithUserId(id.value).subscribe(value => this.posts= value)
}
  ngOnInit(): void {

  }

  validator(inputData: AbstractControl) {
    console.log(inputData)
    if(inputData.value.length >1)
    {
      alert('sadfasd')
    }
    return {err: true}
  }


}
