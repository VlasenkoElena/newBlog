import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./../models/user.model";
import { environment } from '../../../environments/environment';
import { Observable } from "rxjs";
import { Jsona } from 'jsona/lib';
import { TJsonaModel } from "jsona/lib/JsonaTypes";
 jsona: Jsona;


@Injectable()
export class AuthService {
    jsona: Jsona;
    constructor(private http: HttpClient){
        this.jsona = new Jsona();
    }

    createNewUser(user: User): Observable<User> {
        return this.http.post<User>(`${environment.apiUrl}/api/auth/sign_up`, user)
    }

    logInUser(formData: User): Observable<User> {
        let newJson = this.jsona.serialize({
            stuff: {...formData, type: 'user'}
        }) 
        return this.http.post<User>(`${environment.apiUrl}/api/auth/sign_in`, newJson)
    }
}