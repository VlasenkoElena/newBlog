import { Action } from '@ngrx/store';
import { Post } from '../../shared/models/post.model';
import { ErrorModel } from '../../shared/models/error.model';


export const GET_POSTS = '[Posts] GET_POSTS';
export const GET_MY_POST = '[MyPost] GET_MY_POST';
export const GET_POST_BYID = '[PostById] GET_POST_BYID';
export const GET_POSTS_SUCCESS = '[Posts] GET_POSTS_SUCCESS';
export const GET_POST_BYID_SUCCESS = '[Post] GET_POST_BYID_SUCCESS';
export const GET_POSTS_FAIL = '[Posts] GET_POSTS_FAIL';

export class GetPosts implements Action {
    readonly type = GET_POSTS;
}

export class GetMyPost implements Action {
    readonly type = GET_MY_POST;
}

export class GetPostById implements Action {
    readonly type = GET_POST_BYID;
    constructor(public payload: string) {}
}
export class GetPostByIdSuccess implements Action {
    readonly type = GET_POST_BYID_SUCCESS;
    constructor(public payload: Post) {}
}
export class GetPostsSuccess implements Action {
    readonly type = GET_POSTS_SUCCESS;
    constructor(public payload: Post[]) {
    }
}
export class GetPostsFail implements Action {
    readonly type = GET_POSTS_FAIL;
    constructor(public payload: ErrorModel) {}
}
export type Action =
GetPosts |
GetMyPost |
GetPostsSuccess |
GetPostsFail |
GetPostById |
GetPostByIdSuccess;
