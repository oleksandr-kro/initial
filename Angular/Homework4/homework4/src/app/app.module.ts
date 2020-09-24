import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { AllUserComponent } from './components/all-user/all-user.component';
import {RouterModule} from "@angular/router";
import {PostComponent} from "./components/postWithUserId/post.component";
import { CommentComponent } from './components/commentWithPostId/comment/comment.component';



@NgModule({
  declarations: [
    AppComponent,
    AllUserComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'users', component:AllUserComponent, children: [
          {
            path:'posts/:id',component:PostComponent, children:[
              {
                path:'comments/:id', component:CommentComponent,
              }
            ]
          }
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
