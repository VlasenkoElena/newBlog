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

  @Effect()
  addNewPost$ = this.actions.pipe(
    ofType<postsAction.AddNewPost>(postsAction.ADD_NEW_POST),
    switchMap(action =>
      this.postsService.createNewPost(action.payload).pipe(
        map(() => new postsAction.AddSuccess()),
        catchError(error => of(new postsAction.GetPostsFail(error)))
        )
      )
  );

  @Effect()
  editPost$ = this.actions.pipe(
    ofType<postsAction.EditPost>(postsAction.EDIT_POST),
    switchMap(action =>
      this.postsService.editPost(action.payload.id, action.payload.body).pipe(
        map(post => new postsAction.GetPostByIdSuccess(post)),
        catchError(error => of(new postsAction.GetPostsFail(error)))
      ))
  );

  @Effect()
  addImg$ = this.actions.pipe(
    ofType<postsAction.AddImg>(postsAction.ADD_IMG),
    switchMap(action =>
      this.postsService.addImg(action.payload.id, action.payload.file).pipe(
        map(post => new postsAction.AddImgSuccess(post)),
        catchError(error => of(new postsAction.GetPostsFail(error)))
      ))
  );

  @Effect()
  DeleteImg = this.actions.pipe(
    ofType<postsAction.DeleteImg>(postsAction.DELETE_IMG),
    switchMap(action =>
      this.postsService.delImg(action.payload).pipe(
        map(post => new postsAction.DelImgSuccess(post)),
        catchError(error => of(new postsAction.GetPostsFail(error)))
      ))
  );
}
