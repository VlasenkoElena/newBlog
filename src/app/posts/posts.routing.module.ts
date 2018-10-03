import { Routes, RouterModule } from "@angular/router";

import { PostOverviewComponent } from "./post-overview/post-overview.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { NgModule } from "@angular/core";
import { PostIndexComponent } from "./post-index/post-index.component";

const routes: Routes = [
{
    path: 'all',
    component: PostIndexComponent
},
{
    path: 'my-post',
    component: PostIndexComponent
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