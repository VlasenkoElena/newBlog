import { Directive, Input, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Directive({ selector: '[appCurrentUser]'})
export class CurrentUserDirective implements OnInit {
currentUser: User;
    constructor(private route: ActivatedRoute, private tokenService: TokenService) {}


    ngOnInit() {
        this.tokenService.mySubject.subscribe(data => {
            this.currentUser = data;
            console.log(this.currentUser);
          });
    }
    /*@Input('appCurrentUser') set appCurrentUser(condition) {
        if (condition) {
            this.currentUser = this.route.snapshot.data['isMyPost'];
            console.log(this.currentUser);
        }
    }*/
}
