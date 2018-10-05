import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  registrationForm: FormGroup;

  ngOnInit() {
    this.signIn();
  }

  signIn() {
    this.registrationForm = new FormGroup ({
      'email':  new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'name': new FormControl('', [Validators.required])
    })
  }
  
   registrationFormInfo() {
     let registrationInfo = this.registrationForm.value;
     console.log(registrationInfo);
     
     if (registrationInfo) {
       this.authService.createNewUser(registrationInfo)
       .subscribe(
        (user) => {
          this.router.navigate(['posts/my-post'])
          console.log(user);
        },
        (err) => console.log(err)); 
     }
    
  }

  /*getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }*/

}
