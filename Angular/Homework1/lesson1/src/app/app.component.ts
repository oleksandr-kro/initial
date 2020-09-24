import { Component } from '@angular/core';
import {UserService} from "./services/user.service";
import {logWarnings} from "protractor/built/driverProviders";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onSubmit(data){
    console.log(data)
  }


  todoArr =[];
  counterId = 0;


  constructor(private userService: UserService) {
  userService.getUsers().subscribe(jsonUsers=>{
    for (let key in jsonUsers){
      this.todoArr.push({id: key, ...jsonUsers[key]})
    }


  })

}
}
