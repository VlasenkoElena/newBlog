import {  async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TokenService } from './shared/services/token.service';
import { AuthService } from './shared/services/auth.service';
import { TokenServiseStub } from './shared/services/service-stub/token-stub.servise';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { TestStore } from './store/test/test.store';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { AuthState } from './store/reducers/auth.reduser';
import * as authAction from './store/action/auth.action';
import * as fromRoot from './store/reducers';
import * as fromFeature from './store/reducers';

describe('AppComponent', () => {
  let fixture;
  let component;
  let app;
  let authService;
  let token: TokenServiseStub;
  let store: TestStore<AuthState>;
 // let dispatchSpy;

  beforeEach(async(() => {
    authService = jasmine.createSpyObj('AuthService', ['getProfile']);
    const getProfileSpy = authService.getProfile.and.returnValue(of({}));

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({
          ...fromRoot.reduser,
          'feature': combineReducers(fromFeature.reduser)
        })
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: TokenService, useClass: TokenServiseStub},
        {provide: AuthService, useValue: authService},
        {provide: Store, useClass: TestStore}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    app = fixture.debugElement.componentInstance;
   store = TestBed.get(Store);
    fixture.detectChanges();
   spyOn(store, 'dispatch');
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should to be defined', async(() => {
    expect(store).toBeDefined();
  }));

  // it('should getProfile', async() => {
  //   const action = new authAction.GetProfile();
  //   spyOn(store, 'dispatch');
  //   fixture.detectChanges();
  //   await fixture.whenStable();
  //   token.isLogIn();
  //   expect(store.dispatch).toHaveBeenCalledWith(action);
  // });
});
