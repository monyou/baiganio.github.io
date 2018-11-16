import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../core/services/backend/backend.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { HeaderService } from '../../../core/services/header/header.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.scss']
})

export class ProfileComponent implements OnInit {
    loading = false;
    profileImgSrc = '';
    user: any;
    errorMsg = '';

    constructor(private backendService: BackendService, private router: Router, private headerService: HeaderService,
        private http: HttpClient) { }

    ngOnInit() {
        this.loading = true;
        this.backendService.getCurrentUser()
          .subscribe(
          response => {
            this.handleSuccess(response);
          },
          error => {
            this.handleError(error);
          }
        );
    }

    handleSuccess(response): void {
        this.user = response.body;
        if (this.user.image == null) {
            this.profileImgSrc = '../../../../assets/images/no-profile-img.png';
        } else {
            this.profileImgSrc = this.user.image;
        }
        this.loading = false;
    }

    handleError(error): void {
        this.loading = false;
        this.errorMsg = error.message;
        setTimeout(() => {
            this.headerService.clearUserToken();
            this.router.navigate(['/login']);
        }, 1500);
    }
}
