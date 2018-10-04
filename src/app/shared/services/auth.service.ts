import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./../models/user.model";
import { environment } from '../../../environments/environment';
import { Observable } from "rxjs";


@Injectable()
export class AuthService {
    constructor(private http: HttpClient){}

    createNewUser(user: User): Observable<User> {
        return this.http.post<User>(`${environment.apiUrl}/api/auth/sign_up`, user)
    }

    logInUser(email: string, password: string): Observable<User> {
        return this.http.post<User>(`${environment.apiUrl}/api/auth/sign_in`, {email: email, password: password})
    }
}