import { LoginEntry } from './loginEntry.model';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../../core/services/backend/backend.service';
import { HeaderService } from '../../core/services/header/header.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  reactiveForm: FormGroup;
  loginSubmit = new LoginEntry(); // property for the submitted form
  email = '';
  password = '';
  formAlert = 'This field is required';
  loginAlert: any;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private backendService: BackendService,
    private headerService: HeaderService,
  ) {
    this.reactiveForm = formBuilder.group({
      'email': [
        null,
        Validators.compose([Validators.email])
      ],
      'password': [
        null,
        Validators.compose([Validators.required])
      ],
      'validCheckbox': ''
    });
  }

  sendLoginRequest(loginSubmit) {
    this.email = loginSubmit.email;
    console.log(this.email);
    this.loading = true;
    let authToken;
    // this.retryFunction = this.onLoginClicked.bind(this);
    this.backendService.getUserAccessToken(this.email, loginSubmit.password)
      .subscribe(
        response => authToken = response.json(),
        // error => this.errorHandlerService.handleRequestError(error, this.handleError, [this], null, this.retryFunction),
        error => {
          this.loading = false;
          this.loginAlert = error._body = error._body.replace(/"/g, '');
        },
        () => this.handleSuccess(authToken)
      );
    console.log("Submitted");
    
  }

  handleSuccess(authToken): void {
    console.log(authToken);
    this.loading = false;
    // const rememberPassword = true;
    // if (rememberPassword) {
    //   this.headerService.setUserTokenAndRemember(authToken);
    // } else {
    //   this.headerService.clearUserToken();
    //   this.headerService.userToken = authToken;
    // }
    this.headerService.clearUserToken();
    this.headerService.userToken = authToken;
  }

}
