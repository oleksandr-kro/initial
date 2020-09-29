import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../modules/user/user.module";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{

  users:User;
  @Input()
  user:User
  constructor( private userService:UserService) {
    this.userService.getUser().subscribe( value => this.users = value)
  }


}
