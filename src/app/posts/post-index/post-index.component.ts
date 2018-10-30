import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post.model';
import { PostsService } from '../../shared/services/posts.servece';
import { Observable } from 'rxjs';
import { TokenService } from '../../shared/services/token.service';
import { ActivatedRoute } from '@angular/router';

import * as fromStore from '../../store/reducers';
import * as postsAction from '../../store/action/post.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-post-index',
  templateUrl: './post-index.component.html',
  styleUrls: ['./post-index.component.css']
})
export class PostIndexComponent implements OnInit {
 public posts$: Observable<Post[]>;
  myPost;
  constructor(
    private postsService: PostsService,
    private tokenService: TokenService,
    private route: ActivatedRoute,
    private store: Store<fromStore.ItemPostState>
  ) {}

  ngOnInit() {
    this.myPost = this.route.snapshot.data['isMyPost'];
    console.log(this.myPost);
    if (this.myPost) {
      this.getMyPost();
    } else {
      this.getPost();
    }
  }
  getPost() {
    // without redux
      /*this.postsService.getPosts().subscribe(data => {
        this.posts = data;
        console.log(this.posts);
      });*/
      this.posts$ = this.store.select(fromStore.getPosts);
      this.store.dispatch(new postsAction.GetPosts());
  }

  getMyPost() {
    if (this.tokenService.getToken()) {
      /*this.postsService.getMyPosts().subscribe(data => {
        this.posts$ = data;
        console.log(this.posts);
      });*/
      this.posts$ = this.store.select(fromStore.getMyPost);
      this.store.dispatch(new postsAction.GetMyPost());
    }
  }
}
