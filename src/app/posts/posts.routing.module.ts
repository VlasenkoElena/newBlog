import { Routes, RouterModule } from "@angular/router";
import { AllPostsComponent } from "./all-posts/all-posts.component";
import { MyPostsComponent } from "./my-posts/my-posts.component";
import { PostOverviewComponent } from "./post-overview/post-overview.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
{
    path: 'all',
    component: AllPostsComponent
},
{
    path: 'my-post',
    component: MyPostsComponent
},
{
    path: 'post',
    component: PostOverviewComponent
},
{
    path: 'detail',
    component: PostDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}