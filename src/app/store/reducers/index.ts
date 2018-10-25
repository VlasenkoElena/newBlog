import * as fromPost from './posts.reduser';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface ItemPostState {
    posts: fromPost.PostState;
}

export const reduser: ActionReducerMap<ItemPostState> = {
    posts: fromPost.postReduser
};
export const getPostState = createFeatureSelector<fromPost.PostState>('post');

export const getPosts = createSelector(
    getPostState,
    fromPost.getPosts
);
