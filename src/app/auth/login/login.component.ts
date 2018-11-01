import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

import * as fromStore from '../../store/reducers';
import * as authAction from '../../store/action/auth.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  error;
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private store: Store<fromStore.ItemState>
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    let formData = this.loginForm.value;
    if (formData) {
      this.store.dispatch(new authAction.LogIn(formData));
      this.store.select(fromStore.userSuccess).subscribe(
        user => {
            console.log(user);
               this.router.navigate(['posts/my-post']);
          });
    }
    formData = null;
  }
  getErrorMessage() {
    return this.loginForm.get('email').hasError('required')
      ? 'You must enter a value'
      : this.loginForm.get('email').hasError('email')
        ? 'Not a valid email'
        : '';
  }

  getErrorMessagePas() {
    return this.loginForm.get('password').hasError('minlength')
      ? 'Password must be at least 9 characters long.'
      : '';
  }
}
