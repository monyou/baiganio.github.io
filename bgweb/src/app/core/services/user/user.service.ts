import { Injectable } from '@angular/core';
import { UserViewModel } from '../../models/user-view-model.module';
import { URLSearchParams, Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { BackendService } from '../backend/backend.service';

@Injectable()
export class UserService {
  userView = new UserViewModel();
  constructor() { }

  	setUserData(data): void {
		  this.userView = data;
    }

    getUserData(): UserViewModel {
      return this.userView;
    }

    logout(): void {
      this.userView = new UserViewModel();
    }

    // registerUser(data): Observable<Response> {
    //   return this.backendService.backendRequest('post', 'account/register', data);
    // }
}
