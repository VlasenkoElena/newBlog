import * as fromPosts from '../reducers/posts.reduser';
import * as fromAction from '../action/post.action';
import { Post } from '../../shared/models/post.model';

describe('PostReduser', () => {
  const posts: Post[] = [{
    body: 'body',
    title: 'title',
    image: 'img',
    id: 'id',
    author: {
      avatar: 'avatar',
      name: 'name',
      type: 'type',
      id: 'sreing'
    }
  }];

  it('should return posts success', () => {
    const { initialState } = fromPosts;
    const action = new fromAction.GetPostsSuccess(posts);
    const state = fromPosts.postReduser(initialState, action);

    expect(state.posts).toBe(action['payload']);
  });

  it('should return myPosts', () => {
    const { initialState } = fromPosts;
    const action = new fromAction.GetMyPost();
    const state = fromPosts.postReduser(initialState, action);

    expect(state).toBe(state);
  });
});

