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
  loginFail = false;
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

  ngOninit(){
    if (this.headerService.userToken) {     
      console.log(this.headerService.userToken); 
			this.router.navigate(['/account']);
		}
  }


  sendLoginRequest(loginSubmit) {
    this.loading = true;
    let authToken;
    // this.retryFunction = this.onLoginClicked.bind(this);
    this.backendService.getUserAccessToken(loginSubmit.email, loginSubmit.password)
      .subscribe(
        response => authToken = response.json(),
        // error => this.errorHandlerService.handleRequestError(error, this.handleError, [this], null, this.retryFunction),
        error => {
          this.loading = false;
          this.loginAlert = error.json().error_description;
          this.loginFail = true;
          console.log(error);
        },
        () => this.handleSuccess(authToken)
      );
  }

  handleSuccess(authToken): void {
    this.loading = false;
    // const rememberPassword = true;
    // if (rememberPassword) {
    //   this.headerService.setUserTokenAndRemember(authToken);
    // } else {
    //   this.headerService.clearUserToken();
    //   this.headerService.userToken = authToken;
    // }
    this.headerService.setUserTokenAndRemember(authToken);
    this.router.navigate(['/account']);
  }
}
