import { Observable, of } from 'rxjs';
import { Post } from '../../models/post.model';

export class MockPostsService {

    createNewPost(): Observable<Post> {
        return of();
    }
    editPost(): Observable<Post> {
        return of();
    }
    getPostById(): Observable<Post> {
        return of();
    }
    addImg() {
        return of({});
    }

}
