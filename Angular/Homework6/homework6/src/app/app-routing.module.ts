import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from "./user/components/all-users/all-users.component";

const routes: Routes = [
  {path:'users', component:AllUsersComponent},
  {path:'posts', loadChildren: () => import ('./post/post.module').then(value => value.PostModule)},
  {path:'comments', loadChildren: () => import ('./comment/comment.module').then(value => value.CommentModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
