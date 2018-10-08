import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostIndexComponent } from './post-index/post-index.component';
import { PostOverviewComponent } from './post-overview/post-overview.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostsRoutingModule } from './posts.routing.module';
import { MaterialModule } from '../material/material.module';
import { PostComponent } from './post-index/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PostsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    PostIndexComponent, 
    PostOverviewComponent, 
    PostDetailComponent, 
    PostComponent
  ]
})
export class PostsModule { }
