import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../../../core/services/backend/backend.service';

@Component({
    selector: 'app-reset-password',
    templateUrl: 'reset-password.component.html',
    styleUrls: ['reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
    email: string;
    resetFlag: boolean;
    validationCode: string;
    newPass: string;
    confirmPass: string;
    errMsg: string;
    constructor(private route: ActivatedRoute, private router: Router, private backendService: BackendService) {
        this.email = '';
        this.validationCode = '';
        this.newPass = '';
        this.confirmPass = '';
        this.errMsg = '';
        this.resetFlag = false;
    }

    ngOnInit() {
        this.checkRouteParameters();
    }

    checkRouteParameters(): void {
        const token = (String)(this.route.snapshot.params['token']).split('--');
        this.email = token[0];
        this.validationCode = token[1];
    }

    resetPassword() {
        if (this.newPass !== this.confirmPass) {
            this.errMsg = 'Confirm password doesn\'t match!';
        } else {
            this.backendService.
                resetPassword({email: this.email, password: this.newPass.trim(), validationCode: this.validationCode}).subscribe(
                response => {},
                error => {
                    this.errMsg = 'Invalid or expired link!';
                },
                () => {
                    this.resetFlag = true;
                    setTimeout(() => {
                        this.router.navigate(['/login']);
                    }, 3000);
                }
            );
        }
    }
}
