import { Action } from '@ngrx/store';
import * as postAction from '../action/post.action';
import { Post } from '../../shared/models/post.model';

export interface PostState {
    data: Post[];
}

export const initialState: PostState =  {
    data: []
 };

 export function postReduser(state = initialState,
    action: postAction.Action) {
        switch (action.type) {
            case postAction.GET_ONE: {
                const newPost: Post = action.payload;
               return {
                   ...state,
                   films: {...state.data, newPost}
               };
            }
            case postAction.POST_SELECT: {
                return {
                    ...state
                };
            }
            default:
            return state;
        }
    }

    export const getPosts = (state: PostState) => state.data;
