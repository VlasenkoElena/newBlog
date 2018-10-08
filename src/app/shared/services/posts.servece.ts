import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "../models/post.model";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Jsona } from "jsona/lib";

@Injectable()
export class PostsService {
    jsona: Jsona;
  constructor(private http: HttpClient) {
    this.jsona = new Jsona();
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/api/posts`);
  }
  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${environment.apiUrl}/api/posts/${id}`);
  }
  getMyPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/api/posts/my_post`);
  }
  createNewPost(body): Observable<Post> {
    let newPost = this.jsona.serialize({
        stuff: { ...body, type: "post" }
      });
      console.log(newPost);
      return this.http.post<Post>(`${environment.apiUrl}/api/posts`, newPost);
  }
}
