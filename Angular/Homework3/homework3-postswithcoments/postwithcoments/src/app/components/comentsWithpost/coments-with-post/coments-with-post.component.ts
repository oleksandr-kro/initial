import {Component, Input, OnInit} from '@angular/core';
import {Coment} from "../../../models/coment/coment.module";

@Component({
  selector: 'app-coments-with-post',
  templateUrl: './coments-with-post.component.html',
  styleUrls: ['./coments-with-post.component.css']
})
export class ComentsWithPostComponent implements OnInit {
@Input()
comment:Coment

  constructor() { }




  ngOnInit(): void {
  }

}
