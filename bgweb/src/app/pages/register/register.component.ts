// import { HeaderService } from './../../app-services/header/header.service';
import { RegisterEntry } from './registerEntry.model';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  reactiveForm: FormGroup;
  registerEntry = new RegisterEntry();
  loadingMessage;
  // acceptTerms = false;
	// displayError = '';
	completedRegistration;
	// backendValidationErrors;
	// showEmailInfo = false;
  usernameAlert: string = 'This field is required.';

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.reactiveForm = formBuilder.group({
      'username': [
        null,
        Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(50)])
      ],
      'email': [
        null,
        Validators.compose([Validators.email])
      ],
      'password': [
        null,
        Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(50)])
      ],
      // 'confirm-password': [
      //   null,
      //   Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(50)])
      // ],
      'validCheckbox': ''
    });
  }
  
  ngOnInit() {
		// this.headerService.userToken = '';
	}

  sendRegisterRequest(registerEntry){

		this.loadingMessage = 'Loading dudes...'; // this.locale.validatingSignupData;
console.log(this.loadingMessage);
		// this.backendService.registerUser(registerEntry).subscribe(
    //   response => {
    //     this.loadingMessage = '';
    //   },
    //   error => this.errorHandlerService.handleRequestError(
    //     error, 
    //     this.handleError, 
    //     [this, false], 
    //     null, 
    //     this.retryFunction, 
    //     [fullRegistration]
    //   ),
    //   () => {
    //     this.completedRegistration = true;

    //     if (this.utilityService.isLocalStorageNameSupported()) {
    //       localStorage.removeItem('signupData');
    //     }
    //     this.router.navigate(['/timeline'], { queryParams: { initialLoading: true } });
    //   }
    // );
	}







}
