import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { AuthService } from '../../shared/services/auth.service';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import * as authAction from '../action/auth.action';
import { Action } from '@ngrx/store';

@Injectable()
export class AuthEffect {
  constructor(private actions: Actions, private authService: AuthService) {}

  @Effect()
  createNewUser$: Observable<Action> = this.actions.pipe(
    ofType<authAction.CreateNewUser>(authAction.CREATE_NEW_USER),
    switchMap(action => {
      return this.authService.createNewUser(action.payload).pipe(
        map(user => new authAction.UserSuccess(user)),
        catchError(error => of(new authAction.GetAuthFail(error)))
      );
    })
  );

  @Effect()
  logIn$: Observable<Action> = this.actions.pipe(
      ofType<authAction.LogIn>(authAction.LOG_IN),
      switchMap(action => {
          return this.authService.logInUser(action.payload).pipe(
              map(user => new authAction.UserSuccess(user)),
              catchError(error => of(new authAction.GetAuthFail(error)))
          );
      })
  );

  @Effect()
  editAvatar$ = this.actions.pipe(
      ofType<authAction.EditAvatar>(authAction.EDIT_AVATAR),
      switchMap(action => {
          return this.authService.editAvatar(action.payload).pipe(
              map(user => new authAction.UserSuccess(user)),
              catchError(error => of(new authAction.GetAuthFail(error)))
          );
      })
  )
}
