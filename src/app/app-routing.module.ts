import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './content/post/post-list/post-list.component';
import { PostDetailComponent } from './content/post/post-detail/post-detail.component';
import { ReadingComponent } from './content/reading/reading.component';
import { AboutComponent } from './content/about/about.component';
import { ManagePostListComponent } from './content/manage/post/manage-post-list/manage-post-list.component';
import { ManagePostDetailComponent } from './content/manage/post/manage-post-detail/manage-post-detail.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'post/list', component: PostListComponent },
  { path: 'post/detail/:id', component: PostDetailComponent },
  { path: 'reading', component: ReadingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'manage/list', component: ManagePostListComponent },
  { path: 'manage/detail/:id', component: ManagePostDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
