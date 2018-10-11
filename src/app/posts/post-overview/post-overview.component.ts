import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post.model';
import { ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { PostsService } from '../../shared/services/posts.servece';
import { TokenService } from '../../shared/services/token.service';


@Component({
  selector: 'app-post-overview',
  templateUrl: './post-overview.component.html',
  styleUrls: ['./post-overview.component.css']
})
export class PostOverviewComponent implements OnInit {
  post: Observable<Post>;
  show = false;
  editPost;
  id;
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.post = this.route.params.pipe(
      switchMap((params: Params) => {
        return  this.postsService.getPostById(params['id']);
      })
    );
    if (this.id) {
      this.show = true;
    }
  }
  getMyPost() {
    this.postsService.getMyPosts().subscribe(data => {
      this.id = data[1];
      console.log(this.id);
    });
  }
}
