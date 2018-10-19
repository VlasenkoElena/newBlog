/*import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TokenService } from '../../shared/services/token.service';
import { TokenServiseStub } from '../../shared/services/service-stub/token-stub.servise';
import { AuthService } from '../../shared/services/auth.service';
import { of } from 'rxjs';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let authService;

  beforeEach(async(() => {
    authService = jasmine.createSpyObj('AuthService', ['getProfile', 'editAvatar']);
    const getProfileSpy = authService.getProfile.and.returnValue(of({}));
    const loadImgSpy = authService.editAvatar().and.returnValue(of({}));
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ProfileComponent ],
      providers: [
        {provide: TokenService, useClass: TokenServiseStub},
        {provide: AuthService, useValue: authService}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should loadImg', async() => {
    await fixture.whenStable();
    expect(component.loadImg).toHaveBeenCalledWith(File);
  });
});*/
