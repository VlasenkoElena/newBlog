import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BehaviorSubject } from 'rxjs';

import { HeaderComponent } from './header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TokenService } from '../shared/services/token.service';

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

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ HeaderComponent ],
      providers: [{provide: TokenService, useClass: TokenServiseStub}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
