import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from "./components/user/user.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {PostComponent} from "./components/post/post.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {TodoComponent} from "./components/todo/todo.component";
import {TodoDetailsComponent} from "./components/todo-details/todo-details.component";
import {CommentComponent} from "./components/comment/comment.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";

const routes: Routes = [
  { path:'users', component:UserComponent, children:[
      {path:'userdetails/:id',component: UserDetailsComponent}
    ] },
  {
    path:'posts',component:PostComponent, children: [
      {path: 'postdetails/:id', component: PostDetailsComponent}
    ]
  },
  {
    path:'todos',component: TodoComponent, children: [
      {path:'details/:id', component: TodoDetailsComponent}
    ]
  },
  {path:'comments', component: CommentComponent, children:[
      {path: 'details', component: CommentDetailsComponent}
    ]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
