import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { BackendService } from '../../../core/services/backend/backend.service';
import { HeaderService } from '../../../core/services/header/header.service';

@Component({
    selector: 'app-subscription-confirmation',
    templateUrl: 'subscription-confirmation.component.html',
    styleUrls: ['subscription-confirmation.component.scss']
})

export class SubscriptionConfirmationComponent implements OnInit {
    subscriptionId: string;
    validationCode: string;
    successMessage: string;
    errorMessage: string;

    constructor(private route: ActivatedRoute, private router: Router,
                private backendService: BackendService, private headerService: HeaderService) {
        this.subscriptionId = '';
        this.validationCode = '';
        this.successMessage = '';
        this.errorMessage = '';
    }

    ngOnInit() {
        this.checkRouteParameters();
    }

    checkRouteParameters(): void {
        const token = (String)(this.route.snapshot.params['token']).split('--');
        this.subscriptionId = token[0];
        this.validationCode = token[1];
        if (token) {
            this.backendService.confirmRequestForSub({SubscriptionId: this.subscriptionId, ValidationCode: this.validationCode},
                this.headerService.pickUserToken()).subscribe(
                response => {
                    this.successMessage = 'Success!';
                },
                err => {
                    this.errorMessage = 'Invalid or expired link!';
                }
            );
        }
    }
}
