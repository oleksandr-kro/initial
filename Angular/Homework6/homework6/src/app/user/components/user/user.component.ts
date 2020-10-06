import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../interfaces";
import {SubjectService} from "../../../services/subject.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

@Input()
user:User;

  constructor(private subjectService:SubjectService) { }

  ngOnInit(): void {

  }

  saveUser(u: User):void {
    this.subjectService.setUser(u);
  }
}
