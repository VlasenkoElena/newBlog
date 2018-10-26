import * as fromPosts from './posts.reduser';
import * as fromPost from './post.reduser';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

export interface ItemPostState {
  posts: fromPosts.PostState;
}

export const reduser: ActionReducerMap<ItemPostState> = {
  posts: fromPosts.postReduser
};
export const getPostsState = createFeatureSelector<fromPosts.PostState>('posts');
export const getPostState = createFeatureSelector<fromPost.PostState>('post');

export const getPosts = createSelector(getPostsState, fromPosts.getPosts);

export const getMyPost = createSelector(getPostsState, fromPosts.getMyPost);

export const getPostById = createSelector(getPostState, fromPost.getPostById);
