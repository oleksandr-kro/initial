import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../interfaces/user";
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup} from "@angular/forms";
import {log} from "util";
import validate = WebAssembly.validate;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  users:User[] =[];

 counter= 1;
  user:User
  myForm= new FormGroup({

  })

  constructor(private userService:UserService) {

  }

  ngOnInit(): void {



  }

  addUser() {
  if (this.users.length<10){
    this.userService.getUser(this.counter).subscribe(value => this.users.push(value) )
    this.counter++
  }else{ alert('there are no more users')}

  }

  removeUser() {
 this.users.pop()
    this.counter--

  }
}
