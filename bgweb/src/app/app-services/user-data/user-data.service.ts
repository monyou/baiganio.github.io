import { Injectable } from '@angular/core';
import { URLSearchParams, Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';

import { environment } from './../../../environments/environment';

import { UserService } from './../../app-services/user/user.service';
import { HeaderService } from './../../app-services/header/header.service';


@Injectable()
export class UserDataService {

  constructor(private http: Http, private headerService: HeaderService, private userService: UserService) { }

  backendRequest(requestType, requestTarget, requestData?, useUserToken?): Observable<Response> {
		if (!this.headerService.authToken) {
			const req = this.getClientAccessToken()
				.flatMap(
				(response) => {
					const authToken = response.json();
					this.headerService.authToken = authToken.access_token;
					return this.baseBackendRequest(requestType, requestTarget, requestData, useUserToken);
				});
			return req;
		} else {
			return this.baseBackendRequest(requestType, requestTarget, requestData, useUserToken);
		}
	}

	private baseBackendRequest(requestType, requestTarget, requestData?, useUserToken?): Observable<Response> {
		if (requestType === 'post') {
			return this.http.post(environment.apiUrl + requestTarget, requestData,
				{ headers: this.headerService.getContentHeaders(useUserToken) });
		} else if (requestType === 'get') {
      return this.http.get(environment.apiUrl + requestTarget, 
        { headers: this.headerService.getSimpleHeaders(useUserToken), search: requestData });
		}
	}

	private getUserIP(): Observable<Response> {
		return this.http.get(environment.IPCheckingServiceUrl);
  }
  
  getClientAccessToken(): Observable<Response> {
		const idsCredentials = environment.identityServerClientCredentials;

		const params = new URLSearchParams();
		params.set('client_id', idsCredentials.client_id);
		params.set('client_secret', idsCredentials.client_secret);
		params.set('scope', idsCredentials.scope);
		params.set('grant_type', idsCredentials.grant_type);

		return this.http.post(environment.idsUrl + 'connect/token', params,
			{ headers: this.headerService.getFormURLEncodedHeaders() });
	}

  validateEmail(token: string): Observable<Response> {
		const data = {
			ValidationCode: token
		};

		return this.backendRequest('post', 'UserService/ValidateEmail', data);
	}

	registerUser(data): Observable<Response> {
		return this.backendRequest('post', 'UserService/Register', data);
	}

	checkExistance(data): Observable<Response> {
		const params = new URLSearchParams();
		params.set('email', data);
		return this.backendRequest('get', 'UserService/CheckExistance', params);
	}

	sendChangePasswordLink(data): Observable<Response> {
		const params = new URLSearchParams();
		params.set('email', data);
		return this.backendRequest('get', 'UserService/SendChangePasswordLink', params);
	}

	setNewPassword(data): Observable<Response> {
		return this.backendRequest('post', 'UserService/SetNewPassword', data);
	}

	getById(userId: string): Observable<Response> {
		const params = new URLSearchParams();
		params.set('userId', userId);
		return this.backendRequest('get', 'UserService/GetById', params);
	}

	getCurrentUser(): Observable<Response> {
		return this.backendRequest('get', 'UserService/GetByToken', null, true);
	}

}
