import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { RegisterEntry } from './registerEntry.model';

import * as _ from 'lodash';
import { HeaderService } from '../../core/services/header/header.service';
import { BackendService } from '../../core/services/backend/backend.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  reactiveForm: FormGroup;
  ipInfo: any;
  registerEntry = new RegisterEntry();
  loadingMessage;
  acceptTerms = false;
  completedRegistration = false;
  registrationFail: boolean;
  takenEmailAlert: any;
  emailAlert = 'This field is required.';
  passwordAlert = 'The password must be at least 6 characters long.';
  loading = false;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, 
    private http: Http, private backendService: BackendService, private headerService: HeaderService) {
    this.reactiveForm = formBuilder.group({
      'email': [
        null,
        Validators.compose([Validators.email])
      ],
      'password': [
        null,
        Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(50)])
      ]
    });
  }

  ngOnInit() {
    this.headerService.userToken = '';
    this.http.get(environment.IPCheckingServiceUrl).subscribe(data => {
      this.ipInfo = data.json();
    });
  }

  sendRegisterRequest(registerEntry) {
    this.loading = true;
    registerEntry = new RegisterEntry(registerEntry.email, registerEntry.password, this.ipInfo.ip);
    
    this.backendService.registerUser(registerEntry).subscribe(
      response => {
        this.loadingMessage = '';
        this.completedRegistration = true;
        this.loading = false;
      },
      error => {
        this.loading = false;
        this.registrationFail = true;
        this.takenEmailAlert = error.json();
      },
       // this.errorHandlerService.handleRequestError(error, this.handleError, [this, false], null, this.retryFunction, [fullRegistration]),
      () => {
        this.completedRegistration = true;
        this.loading = false;
        this.router.navigate(['/welcome']);
        // if (this.utilityService.isLocalStorageNameSupported()) {
        //   localStorage.removeItem('signupData');
        // }
        // this.router.navigate(['/timeline'], { queryParams: { initialLoading: true } });
      }
    );
  }







}
