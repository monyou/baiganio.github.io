import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../core/services/backend/backend.service';

@Component({
    selector: 'app-forgotten-password',
    templateUrl: 'forgotten-password.component.html',
    styleUrls: ['forgotten-password.component.scss']
})
export class ForgottenPasswordComponent implements OnInit {
    inputFlag: boolean;
    notificationFlag: boolean;
    emailForReset: string;
    errMsg = '';
    loading = false;
    constructor(private backendService: BackendService) {
        this.emailForReset = '';
        this.inputFlag = true;
        this.notificationFlag = false;
    }

    ngOnInit() { }

    sendResetLink(ngForm) {
        this.loading = true;
        this.backendService.changePassword({email: this.emailForReset.trim()}).subscribe(
            response => {},
            error => {
                this.errMsg = error.error;
                ngForm.reset();
                this.loading = false;
            },
            () => {
                this.inputFlag = false;
                this.notificationFlag = true;
                this.loading = false;
            }
        );
    }
}
