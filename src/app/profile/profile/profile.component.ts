import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../../shared/models/user.model';
import { TokenService } from '../../shared/services/token.service';
import { AuthService } from '../../shared/services/auth.service';

import * as fromStore from '../../store/reducers';
import * as authAction from '../../store/action/auth.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Observable<User>;
  show = false;
  file: File;
  constructor(
    public tokenService: TokenService,
    private authService: AuthService,
    private store: Store<fromStore.ItemState>
  ) {}

  ngOnInit() {
    this.store.dispatch(new authAction.GetProfile);
    this.user = this.store.select(fromStore.userSuccess);
    // this.user = this.tokenService.profileSubject;
    }

  editAvatar() {
    this.show = true;
  }

  loadImg(event) {
    this.file = event.target.files[0];
    this.store.dispatch(new authAction.EditAvatar(this.file));
    this.user = this.store.select(fromStore.userSuccess);
    this.show = false;
   }
  }
