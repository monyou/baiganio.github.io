import { Injectable } from '@angular/core';
import { URLSearchParams, Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from './../../../../environments/environment.prod';
import { HeaderService } from '../header/header.service';

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


  registerUser(data): Observable<Response> {
    return this.backendRequest('post', 'account/register', data);
  }

  private getUserIP(): Observable<Response> {
    return this.http.get(environment.IPCheckingServiceUrl);
  }
}
