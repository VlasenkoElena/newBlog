import { Injectable } from "@angular/core";

@Injectable()
export class TokenService {

    public getToken() {
        return localStorage.getItem('token');
    }
}