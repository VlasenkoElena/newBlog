import { Observable, of } from 'rxjs';
import { Post } from '../../models/post.model';

const mockPost = {
    author: {
        type: 'user',
        id: 'id',
        avatar: 'avatar',
        name: 'name'
    },
    body: 'boby',
    id: 'id',
    title: 'title',
    image: 'img'
};

export class MockPostsService {

    createNewPost(): Observable<any> {
        return of(mockPost);
    }
    editPost(): Observable<any> {
        return of(mockPost);
    }
    getPostById(): Observable<any> {
        return of(mockPost);
    }
    addImg() {
        return of({});
    }

}

