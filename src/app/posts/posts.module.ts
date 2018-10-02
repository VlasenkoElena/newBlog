import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PostOverviewComponent } from './post-overview/post-overview.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { PostsRoutingModule } from './posts.routing.module';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  declarations: [
    AllPostsComponent, 
    PostOverviewComponent, 
    PostDetailComponent, 
    MyPostsComponent]
})
export class PostsModule { }
