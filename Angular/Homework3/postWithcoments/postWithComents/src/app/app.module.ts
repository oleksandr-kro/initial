import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PostComponent } from './components/post/post.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AllPostsComponent} from "./components/all-posts/all-posts.component";
import {RouterModule, Routes} from "@angular/router";
import { CommentComponent } from './components/comment/comment.component';

const routes: Routes = [
  {
    path:'posts', component:AllPostsComponent
  },
  {
    path:'posts/comment/:id', component:CommentComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AllPostsComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
