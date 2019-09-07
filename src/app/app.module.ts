import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DevUIModule } from 'ng-devui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { PostListComponent } from './content/post/post-list/post-list.component';
import { SinglePostComponent } from './content/post/post-list/single-post/single-post.component';
import { PostDetailComponent } from './content/post/post-detail/post-detail.component';
import { ReadingComponent } from './content/reading/reading.component';
import { AboutComponent } from './content/about/about.component';
import { ManagePostListComponent } from './content/manage/post/manage-post-list/manage-post-list.component';
import { ManagePostDetailComponent } from './content/manage/post/manage-post-detail/manage-post-detail.component';
import { ButtonComponent } from './basic/button/button.component';
import { AlertComponent } from './basic/alert/alert.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    PostListComponent,
    SinglePostComponent,
    PostDetailComponent,
    ReadingComponent,
    AboutComponent,
    ManagePostListComponent,
    ManagePostDetailComponent,
    ButtonComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DevUIModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
