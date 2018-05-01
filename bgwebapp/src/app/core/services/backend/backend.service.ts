import { Injectable } from '@angular/core';
import { URLSearchParams, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import { HeaderService } from '../header/header.service';
import { environment } from '../../../../environments/environment';
@Injectable()
export class BackendService {

  constructor(private http: Http, private headerService: HeaderService) { }


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
      return this.http.post(
        environment.apiUrl + requestTarget,
        requestData,
        { headers: this.headerService.getContentHeaders(useUserToken) }
      );
    } else if (requestType === 'get') {
      return this.http.get(
        environment.apiUrl + requestTarget,
        { headers: this.headerService.getSimpleHeaders(useUserToken), search: requestData }
      );
    }
  }


  registerUser(data): Observable<Response> {
    return this.backendRequest('post', 'account/register', data);
  }

  validateEmail(token: string): Observable<Response> {
    const data = {
      ValidationCode: token
    };
    return this.backendRequest('get', 'account/ValidateEmail', data);
  }

  getUserIP(): Observable<Response> {
  return this.http.post(environment.IPCheckingServiceUrl, { headers: this.headerService.getFormURLEncodedHeaders()});
  }

  getCurrentUser(): Observable<Response> {
    return this.backendRequest('get', 'account/GetByToken', null, true);
  }


  private getClientAccessToken(): Observable<Response> {
    const idsCredentials = environment.identityServerClientCredentials;
    const params = new URLSearchParams();

    params.set('client_id', idsCredentials.client_id);
    params.set('client_secret', idsCredentials.client_secret);
    params.set('scope', idsCredentials.scope);
    params.set('grant_type', idsCredentials.grant_type);

    return this.http.post(
      environment.idsUrl + 'connect/token',
      params,
      { headers: this.headerService.getFormURLEncodedHeaders() }
    );
  }
  getUserAccessToken(email, password): Observable<Response> {
    const idsCredentials = environment.identityServerUserCredentials;
    //const encodedEmail = email; // encodeURIComponent();

    const params = new URLSearchParams();
    params.set('client_id', idsCredentials.client_id);
    params.set('client_secret', idsCredentials.client_secret);
    params.set('scope', idsCredentials.scope);
    params.set('grant_type', idsCredentials.grant_type);
    params.set('username', email);
    params.set('password', password);
console.log(environment.idsUrl);
console.log(this.headerService.getFormURLEncodedHeaders());
    return this.http.post(environment.idsUrl + 'connect/token', params,
      { headers: this.headerService.getFormURLEncodedHeaders() });
  }

}
