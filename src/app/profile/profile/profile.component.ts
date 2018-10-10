import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../../shared/models/user.model';
import { TokenService } from '../../shared/services/token.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Observable<User>;
  show = false;
  file;
  constructor(
    public tokenService: TokenService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.tokenService.mySubject.subscribe(data => {
      this.user = data;
    });
  }

  editAvatar() {
    this.show = true;
  }
  loadImg(event) {
    this.file = event.target.files[0];
    console.log(this.file);
  }
  saveNewAvatar() {
    this.authService.editAvatar(this.file).subscribe(data => {
      console.log(data);
    });
  }
}
