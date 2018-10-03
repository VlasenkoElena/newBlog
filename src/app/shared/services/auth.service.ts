import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./../models/user.model";
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient){}

    createNewUser(user: User) {
        return this.http.post(`${environment.apiUrl}api/auth/sign_up`, user)
    }

}