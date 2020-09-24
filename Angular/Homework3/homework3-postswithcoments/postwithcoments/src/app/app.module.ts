import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post/post.component';
import { AllPostsComponent } from './components/all-posts/all-posts/all-posts.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { CommentsComponent } from './components/coments/coments/comments.component';
import { ComentsWithPostComponent } from './components/comentsWithpost/coments-with-post/coments-with-post.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AllPostsComponent,
    CommentsComponent,
    ComentsWithPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'posts', component:AllPostsComponent
      },
      {
        path:'post/yourPostWithcoment',component:CommentsComponent
      }
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
