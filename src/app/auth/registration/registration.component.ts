import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

import * as fromStore from '../../store/reducers';
import * as authAction from '../../store/action/auth.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  hide = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private store: Store<fromStore.ItemState>
  ) {}

  ngOnInit() {
    this.signIn();
  }

  signIn() {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      name: ['', [Validators.required]]
    });
  }

  registrationFormInfo() {
    const registrationInfo = this.registrationForm.value;
    if (registrationInfo) {
      this.store.dispatch(new authAction.CreateNewUser(registrationInfo));
      this.store.select(fromStore.userSuccess).subscribe(
        user => {
               this.router.navigate(['posts/my-post']);
          });
      // this.authService.createNewUser(registrationInfo).subscribe(
      //   user => {
      //     this.router.navigate(['posts/my-post']);
      //     console.log(user);
      //   });
    }
  }

  getErrorMessage() {
    return this.registrationForm.get('email').hasError('required')
      ? 'You must enter a value'
      : this.registrationForm.get('email').hasError('email')
        ? 'Not a valid email'
        : '';
  }

  getErrorMessagePas() {
    return this.registrationForm.get('password').hasError('minlength')
      ? 'Password must be at least 9 characters long.'
      : '';
  }
}
