import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { TokenService } from '../services/token.service';

import { User } from '../models/user.model';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import * as authAction from '../../store/action/auth.action';


@Directive({ selector: '[appCurrentUser]'})
export class CurrentUserDirective implements OnInit  {
@Input() appCurrentUser: number;
currentUser: User;

    constructor(
        private tokenService: TokenService,
        private viewContainer: ViewContainerRef,
        private templateRef: TemplateRef<any>,
        private store: Store<fromStore.ItemState>) {}


     ngOnInit() {
        this.tokenService.profileSubject
        .subscribe(data => {
            if (data.id === this.appCurrentUser) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            } else {
                this.viewContainer.clear();
            }
        });
    }


}

