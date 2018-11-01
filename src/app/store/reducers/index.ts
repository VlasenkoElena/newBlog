import * as fromPosts from './posts.reduser';
import * as fromPost from './post.reduser';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

export interface ItemPostState {
  posts: fromPosts.PostState;
  post: fromPost.PostState;
}

export const reduser: ActionReducerMap<ItemPostState> = {
  posts: fromPosts.postReduser,
  post: fromPost.postReduser
};

export const getPostsState = createFeatureSelector<fromPosts.PostState>('posts');
export const getPostState = createFeatureSelector<fromPost.PostState>('post');

export const getPosts = createSelector(getPostsState, fromPosts.getPosts);

export const getMyPost = createSelector(getPostsState, fromPosts.getMyPost);

export const getPostById = createSelector(getPostState, fromPost.getPostById);

export const deletePost = createSelector(getPostsState, fromPosts.deletePost);

export const addNewPost = createSelector(getPostState, fromPost.addNewPost);

export const editPost = createSelector(getPostsState, fromPosts.editPost);

export const addImgSuccess = createSelector(getPostState, fromPost.addImgSuccess);

export const deleteImg = createSelector(getPostState, fromPost.delImg);

export const delImgSuccess = createSelector(getPostState, fromPost.delImgSuccess);
