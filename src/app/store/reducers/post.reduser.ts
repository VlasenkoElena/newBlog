
import * as postAction from '../action/post.action';
import { Post } from '../../shared/models/post.model';

export interface PostState {
    post: Post | null;
}

 export const initialState: PostState = { post: null };

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
                    ...state,
                    post: action.payload
                };
            }
            case postAction.DESELECT_POST: {
                return {
                    ...state,
                    post: null,
                    selected: null
                };
            }
            case postAction.ADD_SUCCESS: {
                return {
                    ...state
                };
            }
            case postAction.ADD_IMG_SUCCESS: {
                return {
                    ...state,
                    post: action.payload
                };
            }
            // case postAction.EDIT_POST: {
            //     return {
            //         ...state
            //     };
            // }
            case postAction.DELETE_IMG_SUCCESS: {
                return {
                    ...state,
                    post: action.payload
                };
            }
            case postAction.ADD_IMG: {
                return {
                       post: action.payload,
                    ...state
                };
            }
            default:
            return state;
        }
    }

    export const getPostById = (state: PostState): any => state.post;
    export const addNewPost = (state: PostState): any => state.post;
    export const addImgSuccess = (state: PostState) => state.post;
    export const delImg = (state: PostState) => state.post;
    export const delImgSuccess = (state: PostState) => state.post;
