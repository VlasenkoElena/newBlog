import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(9)]]
    });
  }

  onSubmit() {
    const formData = this.loginForm.value;
    if (formData) {
      this.authService.logInUser(formData).subscribe(
        user => {
          this.router.navigate(['posts/my-post']);
        },
        err => {
          console.log(err);
          alert('Something went wrong. Please try again');
        }
      );
    }
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
