import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/models/post.model';
import { PostsService } from '../../shared/services/posts.servece';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-index',
  templateUrl: './post-index.component.html',
  styleUrls: ['./post-index.component.css']
})
export class PostIndexComponent implements OnInit {
 posts: Post[]
  constructor(private postsService: PostsService) { }

  ngOnInit() {
   this.postsService.getPosts()
   .subscribe(data => {
     this.posts = data;
   }) 
  }

}
