import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../shared/services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  /*const testLogIn = 'auth_token';*/

  const authService = jasmine.createSpyObj('AuthService', ['logInUser']);
  const logInSpy = authService.logInUser.and.returnValue('auth token');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [ LoginComponent ],
      providers: [{provide: AuthService, useValue: authService}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('should set auth token after user login', () => {
    fixture.detectChanges();
    expect(authService.calls.any()).toBe(true, 'logInUser');
  });*/
});
