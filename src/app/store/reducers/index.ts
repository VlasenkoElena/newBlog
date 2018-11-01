import * as fromPosts from './posts.reduser';
import * as fromPost from './post.reduser';
import * as fromAuth from './auth.reduser';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

export interface ItemState {
  posts: fromPosts.PostState;
  post: fromPost.PostState;
  user: fromAuth.AuthState;
}

export const reduser: ActionReducerMap<ItemState> = {
  posts: fromPosts.postReduser,
  post: fromPost.postReduser,
  user: fromAuth.authReduser
};

export const getPostsState = createFeatureSelector<fromPosts.PostState>('posts');
export const getPostState = createFeatureSelector<fromPost.PostState>('post');
export const getAuthState = createFeatureSelector<fromAuth.AuthState>('user');

export const getPosts = createSelector(getPostsState, fromPosts.getPosts);
export const getMyPost = createSelector(getPostsState, fromPosts.getMyPost);
export const deletePost = createSelector(getPostsState, fromPosts.deletePost);
export const editPost = createSelector(getPostsState, fromPosts.editPost);

export const getPostById = createSelector(getPostState, fromPost.getPostById);
export const addNewPost = createSelector(getPostState, fromPost.addNewPost);
export const addImgSuccess = createSelector(getPostState, fromPost.addImgSuccess);
export const deleteImg = createSelector(getPostState, fromPost.delImg);
export const delImgSuccess = createSelector(getPostState, fromPost.delImgSuccess);

export const userSuccess = createSelector(getAuthState, fromAuth.userSuccess);

