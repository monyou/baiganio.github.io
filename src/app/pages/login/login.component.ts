import { LoginEntry } from './loginEntry.model';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../../core/services/backend/backend.service';
import { HeaderService } from '../../core/services/header/header.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from '../../core/services/error-handler/error-handler.service';
import { UserDataService } from '../../core/services/user-data/user-data.service';
import * as $ from 'jquery';
import { UserViewModel } from '../../core/models/user-view-model.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  reactiveForm: FormGroup;
  loginSubmit = new LoginEntry(); // property for the submitted form
  retryFunction = null;
  user: UserViewModel;
  email = '';
  password = '';
  formAlert = 'This field is required';
  loginAlert: any;
  loginFail = false;
  loading = false;
  rememberMe = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private backendService: BackendService,
    private headerService: HeaderService,
    private errorHandlerService: ErrorHandlerService,
    private userDataService: UserDataService
  ) {
    this.reactiveForm = this.formBuilder.group({
      'email': [
        null,
        Validators.compose([Validators.required, Validators.email])
      ],
      'password': [
        null,
        Validators.compose([Validators.required])
      ],
      'rememberPassword': ''
    });
  }

  ngOnInit() { this.headerService.clearUserToken();}

  ngAfterViewInit(): void {
    // Setting rememberMe to true by default
    $('#rememberMe').prop( "checked", true );
    this.rememberMe = true;
    
    $('#rememberMe').click(function () {
      if ($('#rememberMe').is(':checked')) {
        $('label[for="rememberMe"]').css('color', 'black');
      } else {
        $('label[for="rememberMe"]').css('color', '#999999');
      }
    });
  }

  rememberMeChangeStates() {
    this.rememberMe = !this.rememberMe;
  }

  sendLoginRequest(loginSubmit) {
    this.loading = true;
    this.retryFunction = this.sendLoginRequest.bind(this);
    this.backendService.getUserAccessToken(loginSubmit.email, loginSubmit.password)
      .subscribe(
        response => this.handleSuccess(response),
        error => {
          this.errorHandlerService.handleRequestError(error, this.handleError, [this], null, this.retryFunction);
          this.reactiveForm.reset();
        }
      );
  }

  handleSuccess(authToken): void {
    this.loading = false;
    if (this.rememberMe) {
      this.headerService.setUserTokenAndRemember(authToken);
    } else {
      this.headerService.clearUserToken();
      this.headerService.userToken = authToken;
    }
    this.getUserByToken(authToken.access_token);
  }

  handleError(error): void {
    this.loading = false;
    this.loginAlert = error.error_description;
    this.loginFail = true;
  }

  getUserByToken(authToken): void {
    // this.retryFunction = this.sendLoginRequest.bind(this);
    this.loading = true;
    this.backendService.getUserByToken()
    .subscribe(
    response => {
      const userData = response.body as UserViewModel;
      this.userDataService.setUserData(userData);
      this.handleRedirect();
      this.loading = false;
    },
    error => {
      this.errorHandlerService.handleRequestError(error, this.handleError, [this], null, this.retryFunction);
    });
  }

  handleRedirect(): void {
    if (this.route.snapshot.queryParams['redirect']) {
      const decodedURI = decodeURIComponent(this.route.snapshot.queryParams['redirect']).split('#')[0];
      if (decodedURI.includes('payment_redirect')) {
      // If we ever need to handle a case of another route with query params behind login, implement an elegant reusable solution for this.
          this.router.navigate(['/payment_redirect'], { queryParams: { redirect_flow_id: decodedURI.split('=')[1] } });
      } else {
        this.router.navigate([decodedURI]);
      }
    } else {
      this.router.navigate(['/settings/account']);
    }
  }
}
