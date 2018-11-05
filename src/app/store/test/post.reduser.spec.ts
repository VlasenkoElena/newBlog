import * as fromPost from '../reducers/post.reduser';
import * as fromAction from '../action/post.action';
import { Post } from '../../shared/models/post.model';

describe('PostReduser', () => {
  const post: Post = {
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
  };
  const selected = 'id';


  it('should return post by id success', () => {
    const { initialState } = fromPost;
    const action = new fromAction.GetPostByIdSuccess(post);
    const state = fromPost.postReduser(initialState, action);

    expect(state.post).toEqual(post);
  });

  it('should return post when you add img', () => {
    const { initialState } = fromPost;
    const action = new fromAction.AddImgSuccess(post);
    const state = fromPost.postReduser(initialState, action);
    expect(state.post).toEqual(post);
  });

  it('should return add success', () => {
    const { initialState } = fromPost;
    const action = new fromAction.AddSuccess();
    const state = fromPost.postReduser(initialState, action);
    expect(state).toEqual(state);
  });

  it('should return post without picture', () => {
    const { initialState } = fromPost;
    const action = new fromAction.DelImgSuccess(post);
    const state = fromPost.postReduser(initialState, action);
    expect(state.post).toEqual(post);
  });
});
