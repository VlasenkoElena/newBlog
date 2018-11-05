import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { TokenService } from './shared/services/token.service';

import { Store } from '@ngrx/store';
import * as fromStore from './store/reducers';
import * as authAction from './store/action/auth.action';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private store: Store<fromStore.ItemState>) {}
  ngOnInit() {
    if (this.tokenService.isLogIn()) {
      this.store.dispatch(new authAction.GetProfile());
      this.store.select(fromStore.userSuccess).subscribe();
    }
  }
}
