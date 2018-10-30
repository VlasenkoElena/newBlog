import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { PostsService } from '../../shared/services/posts.servece';
import * as postsAction from '../action/post.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class PostsEffect {
  constructor(private actions: Actions, private postsService: PostsService) {}

  @Effect()
  loadPosts$ = this.actions.ofType(postsAction.GET_POSTS).pipe(
    switchMap(() => {
      return this.postsService.getPosts().pipe(
        map(posts => new postsAction.GetPostsSuccess(posts)),
        catchError(error => of(new postsAction.GetPostsFail(error)))
      );
    })
  );
  @Effect()
  loadMyPost$ = this.actions.ofType(postsAction.GET_MY_POST).pipe(
    switchMap(() => {
      return this.postsService.getMyPosts().pipe(
        map(posts => new postsAction.GetPostsSuccess(posts)),
        catchError(error => of(new postsAction.GetPostsFail(error)))
      );
    })
  );

  @Effect()
  loadPostById$: Observable<Action> = this.actions.pipe(
    ofType<postsAction.GetPostById>(postsAction.GET_POST_BYID),
    switchMap(action =>
      this.postsService.getPostById(action.payload).pipe(
        map(post => new postsAction.GetPostByIdSuccess(post)),
        catchError(error => of(new postsAction.GetPostsFail(error)))
      )
    )
  );

  @Effect()
  deletePost$: Observable<Action> = this.actions.pipe(
      ofType<postsAction.DeletePost>(postsAction.DELETE_BYID),
      switchMap(post =>
        this.postsService.delPostbyId(post.payload).pipe(
          map(() => new postsAction.DeletePostSuccess()),
          catchError(error => of(new postsAction.GetPostsFail(error))
          )
        ))
  );
}
