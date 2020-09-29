import { Component, OnInit } from '@angular/core';
import {User} from "../../modules/user/user.module";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
detailedUser:User;

  constructor( private ActivatedRoute:ActivatedRoute, private UserService: UserService) {
    this.ActivatedRoute.params.subscribe(value =>
    this.UserService.getUserById(value.id).subscribe(data =>this.detailedUser = data)
    )
  }

  ngOnInit(): void {
  }

}
