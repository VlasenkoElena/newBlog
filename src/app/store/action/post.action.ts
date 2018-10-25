import { Action } from '@ngrx/store';
import { Post } from '../../shared/models/post.model';


export const POST_SELECT = '[Posts] Select';
export const GET_ONE = '[Posts] Get One';

export class PostSelect implements Action {
    readonly type = POST_SELECT;
    constructor(public payload: number) { }
}

export class GetOne implements Action {
    readonly type = GET_ONE;
    constructor(public payload: Post) {
    }
}

export type Action = PostSelect | GetOne;
