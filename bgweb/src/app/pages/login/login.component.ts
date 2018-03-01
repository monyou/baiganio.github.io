import { LoginEntry } from './loginEntry.model';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  reactiveForm: FormGroup;
  loginSubmit = new LoginEntry(); // property for the submitted form
  username: string = '';
  password: string = '';
  formAlert: string = 'this field is required';

  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = formBuilder.group({
      'username': [
        null,
        Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(50)])
      ],
      'password': [
        null,
        Validators.compose([Validators.required])
      ],
      'validCheckbox': ''
    });
  }

  sendLoginRequest(loginSubmit) {
    this.username = loginSubmit.username;
    this.password = loginSubmit.password;
  }


}
