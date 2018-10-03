import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PostsService {

    constructor(private http: HttpClient){}

    getPosts() {
        return this.http.get('https://ng-blog-galas-api.herokuapp.com/api/posts')
    }

}