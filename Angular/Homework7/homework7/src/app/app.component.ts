import {Component} from '@angular/core';
import {UserService} from "./services/user.service";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {User} from "./interfaices/user";
import {PostService} from "./services/post.service";
import {Post} from "./interfaices/post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // forma: FormGroup;

  title = 'homework7';

  user: User = {}

  posts: Post[];

  constructor(private userService: UserService, private fb: FormBuilder, private postService: PostService) {
  //   this.forma = fb.group({
  //     name: [null, [Validators.required]],
  //     // , Validators.pattern('[a-zA-Z]')
  //     surname: [null, [Validators.required]]
  //   })
  }


  async searchUser(form: NgForm): Promise<void> {
    if(form.controls.id.value) {
      this.user = await this.userService.getUserById(form.controls.id.value)
    }
  }

  async searchPosts(form: NgForm): Promise<void> {
    const result = await this.postService.getPostbyUserId(form.controls.id.value)
    this.posts = result
  }

  // xxx() {
  //   console.log(this.forma.value);
  // }
}
