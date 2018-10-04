import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      "email": new FormControl('', [Validators.required, Validators.email]),
      "password": new FormControl('', [Validators.required, Validators.minLength(5)]) 
    })
  }
 
  onSubmit(){
  let formData = this.loginForm.value;
  console.log(formData);
 
  }
  getErrorMessage() {
    return this.loginForm.hasError('required') ? 'You must enter a value' :
        this.loginForm.hasError('email') ? 'Not a valid email' :
            '';
  }

}
