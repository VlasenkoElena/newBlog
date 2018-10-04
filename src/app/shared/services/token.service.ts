

export class TokenService {

    public getToken() {
        return localStorage.getItem('token');
    }
}