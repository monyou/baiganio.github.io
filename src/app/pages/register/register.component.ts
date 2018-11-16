import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterEntry } from './registerEntry.model';
import { HeaderService } from '../../core/services/header/header.service';
import { BackendService } from '../../core/services/backend/backend.service';
import { environment } from '../../../environments/environment';
import * as $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit {
  reactiveForm: FormGroup;
  ipinfo: any;
  registerEntry = new RegisterEntry();
  loadingMessage;
  acceptedTerms = false;
  completedRegistration = false;
  registrationFail: boolean;
  takenEmailAlert: any;
  emailAlert = 'This field is required.';
  passwordAlert = 'The password must be at least 6 characters long.';
  loading = false;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
    private http: HttpClient, private backendService: BackendService, private headerService: HeaderService) {
    this.reactiveForm = formBuilder.group({
      'email': [
        null,
        Validators.compose([Validators.required, Validators.email])
      ],
      'password': [
        null,
        Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(50)])
      ],
      'acceptedTerms': ''
    });
  }

  ngOnInit() {
    // this.headerService.userToken = '';
    this.http.get(environment.IPCheckingServiceUrl).subscribe(data => {
      this.ipinfo = data;
    });
  }

  ngAfterViewInit(): void {
    $('#acceptedTerms').click(function () {
      if ($('#acceptedTerms').is(':checked')) {
        $('label:has(#acceptedTerms)').css('color', 'black');
      } else {
        $('label:has(#acceptedTerms)').css('color', '#999999');
      }
    });
  }

  onAcceptedTermsChecked(value: boolean) {
    if (value === false) {
      this.acceptedTerms = true;
    } else {
      this.acceptedTerms = false;
    }
  }

  sendRegisterRequest(registerEntry) {
    this.loading = true;
    registerEntry = new RegisterEntry(registerEntry.email, registerEntry.password, this.ipinfo.ip);

    this.backendService.registerUser(registerEntry).subscribe(
      response => {
        this.loadingMessage = '';
        this.completedRegistration = true;
        this.loading = false;
      },
      error => {
        this.loading = false;
        this.registrationFail = true;
        this.takenEmailAlert = error.error;
        this.reactiveForm.reset();
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
