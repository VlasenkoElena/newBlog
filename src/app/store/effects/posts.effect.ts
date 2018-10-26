import { Injectable } from '@angular/core';

import { Actions, Effect} from '@ngrx/effects';

import { PostsService } from '../../shared/services/posts.servece';
import * as postsAction from '../action/post.action';
import { catchError, map,  switchMap} from 'rxjs/operators';
import { of } from 'rxjs';
import { pipe } from '@angular/core/src/render3';

@Injectable()
export class PostsEffect {
    constructor(private actions: Actions,
                private postsService: PostsService) {}

@Effect()
loadPosts$ = this.actions.ofType(postsAction.GET_POSTS)
.pipe(
    switchMap(() => {
        return this.postsService.getPosts()
        .pipe(map(posts => new postsAction.GetPostsSuccess(posts)),
         catchError(error => of(new postsAction.GetPostsFail(error)))
        );
    })
);
@Effect()
loadMyPost$ = this.actions.ofType(postsAction.GET_MY_POST)
.pipe(
    switchMap(() => {
        return this.postsService.getMyPosts()
        .pipe(map(posts => new postsAction.GetPostsSuccess(posts)),
        catchError(error => of(new postsAction.GetPostsFail(error)))
        );
    })
);

@Effect()
loadPostById$ = this.actions.ofType(postsAction.GET_POST_BYID)
.pipe(
    switchMap(() => {

        console.log(postsAction.GetPostById['payload']);
        return this.postsService.getPostById(postsAction.GetPostById['payload'])
        .pipe(map(post => new postsAction.GetPostByIdSuccess(post)),
        catchError(error => of(new postsAction.GetPostsFail(error)))
        );
    })
);
}
