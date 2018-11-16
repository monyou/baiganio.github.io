import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { BackendService } from '../../../core/services/backend/backend.service';
import { ErrorHandlerService } from '../../../core/services/error-handler/error-handler.service';
import { Router } from '@angular/router';
import { HeaderService } from '../../../core/services/header/header.service';
import { UserDataService } from '../../../core/services/user-data/user-data.service';
import { UserViewModel } from '../../../core/models/user-view-model.module';
import { StudentViewModel } from '../../../core/models/student-view-model.module';

@Component({
    selector: 'app-settings',
    templateUrl: 'settings.component.html',
    styleUrls: ['settings.component.scss']
})

export class SettingsComponent implements OnInit, AfterViewInit {
    user = new UserViewModel();
    student = new StudentViewModel();
    activeSubscriptions = new Array<Object>();

    constructor(private backendService: BackendService, private errorHandlerService: ErrorHandlerService,
        private router: Router, private headerService: HeaderService, private userDataService: UserDataService) { }

    ngOnInit() {
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
        this.user = response.body as UserViewModel;
        this.getUserActiveSubscriptions();
    }

    handleError(error): void {
        console.log(error.message);
    }

    isActiveStudent() {
        if (this.activeSubscriptions.length !== 0) {
            return true;
        }
        return false;
    }

    private getStudentInfo() {
        this.backendService.getStudentInfo().subscribe(
            response => {
                this.student = response.body as StudentViewModel;
            },
            error => { console.log(error.message); }
        );
    }

    private getUserActiveSubscriptions() {
        this.backendService.getUserActiveSubscriptions().subscribe(
            response => {
                this.activeSubscriptions = response.body;
            },
            error => { console.log(error.message); }
        );
    }

    ngAfterViewInit(): void {}
}
