
import * as postAction from '../action/post.action';
import { Post } from '../../shared/models/post.model';

export interface PostState {
    post: Post | null;
}

 export const initialState: PostState = { post: null};

 export function postReduser(state = initialState, action: postAction.Action) {
        switch (action.type) {
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

    export const getPostById = (state: PostState) => state.post;
