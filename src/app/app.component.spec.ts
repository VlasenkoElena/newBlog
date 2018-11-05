import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';

import { TokenService } from './shared/services/token.service';
import { AuthService } from './shared/services/auth.service';
import { TokenServiseStub } from './shared/services/service-stub/token-stub.servise';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { TestStore } from './store/test/test.store';
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import { AuthState } from './store/reducers/auth.reduser';
import * as authAction from './store/action/auth.action';
import * as fromRoot from './store/reducers';
import * as fromFeature from './store/reducers';
import { User } from './shared/models/user.model';

describe('AppComponent', () => {
  let fixture;
  let component;
  let app;
  let authService;
  let store: Store<fromFeature.ItemState>;
 // let store: TestStore<AuthState>;
  // let dispatchSpy;

  beforeEach(async(() => {
    authService = jasmine.createSpyObj('AuthService', ['getProfile']);
    const getProfileSpy = authService.getProfile.and.returnValue(of({}));

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({
          ...fromRoot.reduser,
          feature: combineReducers(fromFeature.reduser)
        })
      ],
      declarations: [AppComponent],
      providers: [
        { provide: TokenService, useClass: TokenServiseStub },
        { provide: AuthService, useValue: authService },
        { provide: Store, useClass: TestStore }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    component = fixture.componentInstance;
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should to be defined', async(() => {
    expect(store).toBeDefined();
  }));

  it('should getProfile', async () => {
    const action = new authAction.GetProfile();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
