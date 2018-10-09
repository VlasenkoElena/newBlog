import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  ActivatedRoute, Params, Router } from '@angular/router';

import { Post } from '../../shared/models/post.model';
import { PostsService } from '../../shared/services/posts.servece';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  createPost: FormGroup;
  post: Post;
  id;

  constructor(private fb: FormBuilder,
              private postsService: PostsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.createPost = this.fb.group({
      body: ['', Validators.required]
    });
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
    this.getId();
    }
  }

  getId() {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.postsService.getPostById(params['id']);
      })
    ).subscribe(data => {
      this.createPost.get('body').setValue(data.body);
    });
  }

  savePost() {
    const body = this.createPost.value;
    if (this.id) {
      console.log(this.id);
      this.postsService.editPost(this.id, body)
      .subscribe(post => {
        this.router.navigate(['posts/my-post']);
       console.log(post);
      });
    } else {
      this.postsService.createNewPost(body)
    .subscribe(post => {
      this.router.navigate(['posts/my-post']);
      console.log('hi');
    });
  }
 }

}
