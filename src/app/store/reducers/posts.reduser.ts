
import * as postAction from '../action/post.action';
import { Post } from '../../shared/models/post.model';

export interface PostState {
    posts: Post[];
}

export const initialState: PostState =  {
    posts: []
 };

 export function postReduser(state = initialState, action: postAction.Action) {
        switch (action.type) {
            case postAction.GET_POSTS: {
               return {
                   ...state
               };
            }
            case postAction.GET_MY_POST: {
                return {
                    ...state
                };
            }
            case postAction.GET_POSTS_SUCCESS: {
                return {
                    ...state,
                    posts: action['payload']
                };
            }
            case postAction.GET_POST_BYID: {
                const id = action.payload;
                return {
                    ...state,
                    selected: id
                };
            }
            case postAction.GET_POST_BYID_SUCCESS: {
                return {
                    ...state
                };
            }
            default:
            return state;
        }
    }

    export const getPosts = (state: PostState) => state.posts;
    export const getMyPost = (state: PostState) => state.posts;
   // export const getPostById = (state: PostState) => state.post;
