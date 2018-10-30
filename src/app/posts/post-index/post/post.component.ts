import { Component,  Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../../shared/models/post.model';

import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import * as postAction from '../../../store/action/post.action';
import { Observable } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  constructor(private store: Store<fromStore.ItemPostState>) { }

  ngOnInit() {
   // console.log(this.post);
  }

  deletePost() {
    this.store.dispatch(new postAction.DeletePost(this.post.id));
    this.store.select(fromStore.deletePost);
  }
}
