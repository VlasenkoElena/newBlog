import {  async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BehaviorSubject } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TokenService } from './shared/services/token.service';
import { AuthService } from './shared/services/auth.service';

class TokenServiseStub implements TokenService {
  public mySubject: BehaviorSubject<any>;
  constructor() {
      this.mySubject = new BehaviorSubject({});
  }
  public setToken(token) {}

  public getToken() {
      return 'token';
  }
  public isLogIn() {
      return true;
  }
  public delToken() {
      return;
  }
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    const authService = jasmine.createSpyObj('AuthService', ['getProfile']);
    let getProfileSpy = authService.getProfile.and.returnValue('user data');
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: TokenService, useClass: TokenServiseStub},
        {provide: AuthService, useValue: authService}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
