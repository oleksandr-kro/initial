import { Component } from '@angular/core';
import {constructorParametersDownlevelTransform} from '@angular/compiler-cli';
import construct = Reflect.construct;
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework3-app';


  constructor(private UserService:UserService) {
this.UserService.getUsers().subscribe( value=> {
  console.log(value);
})
    console.log('qwrqwr');

  }

}
