import {  async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BehaviorSubject, of } from 'rxjs';
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
  let fixture;
  let component;
  let app;

  beforeEach(async(() => {
    const authService = jasmine.createSpyObj('AuthService', ['getProfile']);
    const getProfileSpy = authService.getProfile.and.returnValue(of({}));

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: TokenService, useClass: TokenServiseStub},
        {provide: AuthService, useValue: authService}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));
});

