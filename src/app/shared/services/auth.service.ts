import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./../models/user.model";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Jsona } from "jsona/lib";
import { TokenService } from "./token.service";

@Injectable()
export class AuthService {
  jsona: Jsona;
  constructor(private http: HttpClient, public tokenService: TokenService) {
    this.jsona = new Jsona();
  }

  createNewUser(user: User): Observable<any> {
    let newUser = this.jsona.serialize({
      stuff: { ...user, type: "user" }
    });
    return this.http
      .post<any>(`${environment.apiUrl}/api/auth/sign_up`, newUser)
      .pipe(
        map(token => {
            this.tokenService.setToken(token.auth_token);
            console.log(token.auth_token);
        })
      );
  }

  logInUser(formData: User): Observable<any> {
    let newJson = this.jsona.serialize({
      stuff: { ...formData, type: "user" }
    });
    return this.http
      .post<any>(`${environment.apiUrl}/api/auth/sign_in`, newJson)
      .pipe(
        map(token => {
           console.log(token.auth_token);  
           this.tokenService.setToken(token.auth_token);
        })
      );
  }
}
