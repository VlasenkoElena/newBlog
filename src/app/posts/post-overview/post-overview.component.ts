import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../shared/models/post.model';
import { ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { PostsService } from '../../shared/services/posts.servece';

import * as fromStore from '../../store/reducers';
import * as postsAction from '../../store/action/post.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-post-overview',
  templateUrl: './post-overview.component.html',
  styleUrls: ['./post-overview.component.css']
})
export class PostOverviewComponent implements OnInit, OnDestroy {
  post: Observable<Post>;
  id: string;
  constructor(
   // private postsService: PostsService,
    private route: ActivatedRoute,
    private store: Store<fromStore.ItemPostState>
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.post = this.store.select(fromStore.getPostById);
    this.store.dispatch(new postsAction.GetPostById(this.id));
  // without redux
  //   this.post = this.route.params.pipe(
  //     switchMap((params: Params) => {
  //       return this.postsService.getPostById(params['id']);
  //     })
  //   );
  }

  ngOnDestroy() {
    this.store.dispatch(new postsAction.DeselectPost);
  }
}
