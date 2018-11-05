import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Post } from '../../shared/models/post.model';
import { filter } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import * as postsAction from '../../store/action/post.action';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  createPost: FormGroup;
  post: Post;
  id;
  file: File;
  newPost;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromStore.ItemState>
  ) {}

  ngOnInit() {
    this.createPost = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
    this.newPost = this.route.snapshot.data['isNewPost'];

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.getId();
    }
  }

  getId() {
    this.store.dispatch(new postsAction.GetPostById(this.id));
    this.store.select(fromStore.getPostById)
    .pipe(filter(val => val !== null))
    .subscribe(data => {
      this.createPost.setValue({
       body:  data.body,
       title: data.title
       });
      this.post = data;
    });
  }

  loadImg(event) {
    this.file = event.target.files[0];
    if (this.id !== null) {
      this.store.dispatch(new postsAction.AddImg({id: this.id, file: this.file}));
      this.store.select(fromStore.addImgSuccess).subscribe(
        data => {
         this.post = data;
        }
      );
    }
  }

  savePost() {
    const body = this.createPost.value;
    if (this.id) {
       this.store.select(fromStore.editPost).subscribe(
         post => {
          this.router.navigate(['posts/my-post']);
         }
       );
       this.store.dispatch(new postsAction.EditPost({id: this.id, body}));
      } else {
      this.store.select(fromStore.addNewPost)
      .subscribe(post => {
        console.log(post);
        this.post = post;
        this.router.navigate(['posts/my-post']);
      });
      this.store.dispatch(new postsAction.AddNewPost(body));
    }
  }

  deletePost() {
    if (this.id) {
      this.store.dispatch(new postsAction.DeletePost(this.id));
      this.store.select(fromStore.deletePost);
      this.router.navigate(['posts/my-post']);
    }
  }

  deleteImg() {
    this.store.dispatch(new postsAction.DeleteImg(this.id));
    this.store.select(fromStore.delImgSuccess).subscribe(
      data => {
        this.post = data;
      }
    );
    //  without ngrx
    // this.postsService.delImg(this.id).subscribe(data => {
    //   this.post = data;
    // });
  }
}
