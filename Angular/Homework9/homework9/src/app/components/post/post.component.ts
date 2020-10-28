import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id= new FormControl(1, [
    Validators.maxLength(1)

  ],this.validator )
  myForm= new FormGroup({
    id:this.id
  });


  constructor() { }

  ngOnInit(): void {
  }
  validator(inputData:AbstractControl){
    console.log(inputData)
    return true
  }
}
