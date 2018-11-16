import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../../../core/services/backend/backend.service';
import { ErrorHandlerService } from '../../../core/services/error-handler/error-handler.service';
// import { BackendService } from '../../core/backend/backend.service';
// import { LocalizationService } from '../../core/localization/localization.service';
// import { EventBusService } from '../../core/event-bus/event-bus.service';
// import { ErrorHandlerService } from '../../core/error-handler/error-handler.service';

const visibleButtons = {
    logo: true
};

@Component({
selector: 'app-confirmation',
templateUrl: './confirmation.component.html',
styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
    errorMessage = '';
    successMessage = '';
    isEmailConfirmed = false;
    enableLogin = false;
    loading = false;
    // locale = this.localizationService.getStrings();
    state;
    redirectURI;
    retryFunction = null;
    userId;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private backendService: BackendService,
        // private localizationService: LocalizationService,
        // private eventBusService: EventBusService,
        private errorHandlerService: ErrorHandlerService
    ) {
        // this.eventBusService.emitChangeBtnVisibility(visibleButtons);
    }

    ngOnInit() {
        this.checkRouteParameters();
    }

    checkRouteParameters(): void {
        this.retryFunction = this.checkRouteParameters.bind(this);
        const token = this.route.snapshot.params['token'];
        const change = this.route.snapshot.params['changeid'];
        this.state = this.route.snapshot.queryParams['state'];
        this.redirectURI = this.route.snapshot.queryParams['redirect_uri'];
        if (token) {
            this.isEmailConfirmed = true;
            this.enableLogin = true;
            this.backendService.validateEmail(token)
            .subscribe(
                response => {
                    this.userId = response;
                    this.successMessage = 'Welcome to BG Team community!';
                },
                error =>  this.errorHandlerService.handleRequestError(error, this.handleError, [this], null, this.retryFunction)
            );
        } else if (change) {
            // this.backendService.revertUserChange(change)
            // 	.subscribe(
            // 	response => {
            // 		this.successMessage = this.locale.confirmRevertChangesSuccess;
            // 	},
            // 	error => this.errorHandlerService.handleRequestError(error, this.handleError, [this], null, this.retryFunction));
        } else {
            // this.errorMessage = this.locale.confirmInvalidLink;
        }
    }

    handleError(error, status): void {
        if (this.isEmailConfirmed) {
            this.errorMessage = error;
        }
    }

    goToLogin(): void {
        if (this.redirectURI) {
            console.log(this.redirectURI + '----' + this.state);
            this.router.navigate(['/login'], { queryParams: { redirect_uri: this.redirectURI, state: this.state } });
        } else {
            console.log('nothing');
            this.router.navigate(['/login']);
        }
    }
}
