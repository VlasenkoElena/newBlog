import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, switchMapTo } from 'rxjs/operators';
import { Jsona } from 'jsona/lib';

import { TokenService } from './token.service';
import { User } from './../models/user.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
  jsona: Jsona;
  constructor(private http: HttpClient, public tokenService: TokenService) {
    this.jsona = new Jsona();
  }

  createNewUser(user: User): Observable<any> {
    const newUser = this.jsona.serialize({
      stuff: { ...user, type: 'user' }
    });
    return this.http
      .post<any>(`${environment.apiUrl}/api/auth/sign_up`, newUser)
      .pipe(
        map(token => {
          this.tokenService.setToken(token.auth_token);
        }),
        switchMapTo(this.getProfile())
      );
  }

  logInUser(formData: User): Observable<any> {
    const newJson = this.jsona.serialize({
      stuff: { ...formData, type: 'user' }
    });
    return this.http
      .post<any>(`${environment.apiUrl}/api/auth/sign_in`, newJson)
      .pipe(
        map(token => {
          this.tokenService.setToken(token.auth_token);
        }),
        switchMapTo(this.getProfile())
      );
  }

  getProfile(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/profile`).pipe(
      map(data => {
        if (this.tokenService.getToken()) {
          this.tokenService.mySubject.next(data);
        }
        return data;
      })
    );
  }

  editAvatar(file): Observable<any> {
    const newImg = new FormData();
    newImg.append('myFile', file);
    return this.http.put(`${environment.apiUrl}/api/profile/avatar`, newImg);
  }
}
