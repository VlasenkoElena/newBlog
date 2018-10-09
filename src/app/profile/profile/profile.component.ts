import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../../shared/models/user.model';
import { TokenService } from '../../shared/services/token.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Observable<User>;
  show = false;
  constructor(public tokenService: TokenService) {}

  ngOnInit() {
  this.tokenService.mySubject.
  subscribe(data => {
    this.user = data;
  });
  }

  editAvatar() {
    this.show = true;
  }
}
