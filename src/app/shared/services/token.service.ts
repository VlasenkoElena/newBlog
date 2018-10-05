import { Injectable } from "@angular/core";

@Injectable()
export class TokenService {

    public setToken(token) {
        return localStorage.setItem('auth_token', token)
    }
    public getToken() {
        return localStorage.getItem('auth_token');
    }
    public del() {
        return localStorage.removeItem('auth_token');
    }

}