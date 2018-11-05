import { Component, OnInit } from '@angular/core';
import { TokenService } from '../shared/services/token.service';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import * as fromStore from '../store/reducers';
import * as authAction from '../store/action/auth.action';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: Observable<User>;
  constructor(public tokenService: TokenService,
              private router: Router,
              private store: Store<fromStore.ItemState>) { }

  ngOnInit() {
    this.store.dispatch(new authAction.GetProfile);
    this.user = this.store.select(fromStore.userSuccess);
  }

  logOut() {
   this.tokenService.delToken();
  }

  goToLogin() {
    if (this.tokenService.isLogIn()) {
     this.router.navigate(['profile/profile']);
    }
  }
}
