import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../../shared/services/posts.servece';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  createPost: FormGroup;

  constructor(private fb: FormBuilder,
              private postsService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.createPost = this.fb.group({
      body: ['', Validators.required]
    })
    console.log(this.createPost);
    
  }

  savePost() {
    let body = this.createPost.value;
    this.postsService.createNewPost(body)
    .subscribe(post => {
      this.router.navigate(["posts/my-post"]);
      console.log(post); 
    })
  
  }

}
