import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { UserService } from '../user/user.service';


@Injectable()
export class HeaderService {
	authToken;
	adminToken;
	private _userToken;
	get userToken() {
		return this._userToken;
	}
	set userToken(token) {
		this._userToken = token.access_token;
	}

	constructor(private userViewService: UserService) {
    	this._userToken = localStorage.getItem('user_token');
	}

	clearUserToken() {
		this._userToken = '';
		this.userViewService.logout();
	}

	setUserTokenAndRemember(token) {
		this.clearUserToken();
		this._userToken = token.access_token;
	}

	getSimpleHeaders(useUserToken?): Headers {
		const simpleHeaders = new Headers();
		simpleHeaders.append('Accept', 'application/json');

		let authToken = this.pickAuthenticationToken();
		if (useUserToken) authToken = this.userToken;
		simpleHeaders.append('Authorization', `Bearer ${authToken}`);

		//simpleHeaders.append('Active-Property', this.userDataService.selectedPropertyId);

		return simpleHeaders;
	}

	// getSimpleAdminHeaders(): Headers {
	// 	const simpleHeaders = new Headers();
	// 	simpleHeaders.append('Accept', 'application/json');

	// 	simpleHeaders.append('Authorization', `Bearer ${this.adminToken}`);

	// 	return simpleHeaders;
	// }

	getContentHeaders(useUserToken?): Headers {
		const contentHeaders = this.getSimpleHeaders(useUserToken);
		contentHeaders.append('Content-Type', 'application/json');

		return contentHeaders;
	}

	// getContentAdminHeaders(): Headers {
	// 	const contentHeaders = this.getSimpleAdminHeaders();
	// 	contentHeaders.append('Content-Type', 'application/json');

	// 	return contentHeaders;
	// }

	getFormURLEncodedHeaders(): Headers {
		const formURLEncodedHeaders = new Headers();
		formURLEncodedHeaders.append('Accept', 'application/json');
		formURLEncodedHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

		return formURLEncodedHeaders;
	}

	pickAuthenticationToken(): string {
		return this.authToken;
	}
}
