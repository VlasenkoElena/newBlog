import { Component, OnInit } from "@angular/core";
import { Post } from "../../shared/models/post.model";
import { PostsService } from "../../shared/services/posts.servece";
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { ActivatedRoute, ParamMap, Params } from "@angular/router";

@Component({
  selector: "app-post-overview",
  templateUrl: "./post-overview.component.html",
  styleUrls: ["./post-overview.component.css"]
})
export class PostOverviewComponent implements OnInit {
  //post: Observable<Post>;
  post: Post;
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    /*this.post = this.route.params.pipe(
      switchMap((params: Params) => {
        return  this.postsService.getPostById(params['id']);
      })
    );*/
    this.getPostId();
  }
  getPostId() {
    let id = this.route.snapshot.paramMap.get("id");
    this.postsService.getPostById(id).subscribe(data => {
      this.post = data;
    });
  }
}
