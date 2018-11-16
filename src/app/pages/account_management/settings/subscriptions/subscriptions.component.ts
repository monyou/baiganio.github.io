import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../../core/services/backend/backend.service';
import { HeaderService } from '../../../../core/services/header/header.service';
import { Router } from '../../../../../../node_modules/@angular/router';
import * as $ from 'jquery';

@Component({
    selector: 'app-subscriptions',
    templateUrl: 'subscriptions.component.html',
    styleUrls: ['subscriptions.component.scss']
})

export class SubscriptionsComponent implements OnInit {
    subscriptions = new Array<Object>();
    userId = '';
    errorMsg = '';
    notificationRequest = false;
    loading = false;
    panelOpenState = false;
    totalUsersInSubscr = 0;

    constructor(private backendService: BackendService, private headerService: HeaderService, private router: Router) {

    }

    ngOnInit() {
        this.loading = true;
        this.backendService.getCurrentUser().subscribe(
            response => {
                this.userId = response.body.id;
                this.loading = false;
            },
            error => {
                this.errorMsg = error.message;
                this.loading = false;
                setTimeout(() => {
                    this.headerService.clearUserToken();
                    this.router.navigate(['/login']);
                }, 1500);
            }
        );
        this.loading = true;
        this.backendService.getAllSubscriptions().subscribe(
            response => {
                response.body.forEach(element => {
                    this.subscriptions.push(element);
                });
                this.loading = false;
            },
            error => {
                this.errorMsg = error.message;
                this.loading = false;
            },
            () => { }
        );
    }

    sendRequest(id: string, btn) {
        this.loading = true;
        this.backendService.sendRequestForSub({SubscriptionId: id}, this.headerService.pickUserToken()).subscribe(
            response => {
                this.loading = false;
            },
            error => {
                this.loading = false;
                this.errorMsg = error.message;
            },
            () => {
                this.notificationRequest = true;
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
        );
    }

    isActiveSubscr(subscr) {
        if (subscr[this.userId] === 'Confirmed') {
            return true;
        }
    }

    totalUsers(users): number {
        this.totalUsersInSubscr = Object.keys(users).length;
        return this.totalUsersInSubscr;
    }

    getSubscrStatus(subscr) {
        if (subscr[this.userId] === 'Confirmed') {
            $('#subscReqStatus').html('<i class="fas fa-check"></i>');
            return 'Active';
        } else if (subscr[this.userId] === 'WaitingForConfirmation') {
            return 'Not confirmed!';
        } else {
            return 'N/A';
        }
    }

    hasPendingRequest(usersInSub, btn) {
        if (Object.keys(usersInSub).length > 0) {
            if (usersInSub[this.userId] === 'Confirmed') {
                return false;
            } else if (usersInSub[this.userId] === 'WaitingForConfirmation') {
                 return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }
}
