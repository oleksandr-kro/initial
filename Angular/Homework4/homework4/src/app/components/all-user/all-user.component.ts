import { Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../modules/user/user.module";

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent {

users:User[];

  constructor(private userService:UserService) {
    this.userService.getAllUsers().subscribe(value => this.users=value
    )
  }



}
