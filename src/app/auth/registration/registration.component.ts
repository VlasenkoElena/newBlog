import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private form: FormBuilder) { }

  public registrationForm: FormGroup;

  ngOnInit() {
    this.signIn();
  }

  signIn() {
    this.registrationForm = this.form.group ({
      'email':  new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'name': new FormControl('', [Validators.required])
    })
  }
  
  submitRegistrationForm() {
    
  }

  /*getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }*/

}
