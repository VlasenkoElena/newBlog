import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post.model';
import { PostsService } from '../../shared/services/posts.servece';
import { Observable } from 'rxjs';
import { TokenService } from '../../shared/services/token.service';

@Component({
  selector: 'app-post-index',
  templateUrl: './post-index.component.html',
  styleUrls: ['./post-index.component.css']
})
export class PostIndexComponent implements OnInit {
  posts: Post[];
  constructor(
    private postsService: PostsService,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    if (this.tokenService.getToken()) {
      this.postsService.getMyPosts().subscribe(data => {
        console.log(data, 'mypost');
      });
    }
      this.postsService.getPosts().subscribe(data => {
        this.posts = data;
        console.log(this.posts, 'all');
      });
  }
}
