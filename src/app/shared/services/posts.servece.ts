import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "../models/post.model";
import { environment } from '../../../environments/environment';
import { Observable } from "rxjs";

@Injectable()
export class PostsService {

    constructor(private http: HttpClient){}

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(`${environment.apiUrl}/api/posts`)
    }
    getPostById(id:number): Observable<Post> {
        return this.http.get<Post>(`${environment.apiUrl}/api/posts/${id}`);
    }
    getMyPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(`${environment.apiUrl}/api/posts/my_post`);
    }

}