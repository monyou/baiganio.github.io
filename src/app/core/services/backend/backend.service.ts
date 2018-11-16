import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { HeaderService } from '../header/header.service';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { StudentViewModel } from '../../models/student-view-model.module';

@Injectable()
export class BackendService {

  constructor(private http: HttpClient, private headerService: HeaderService) { }

  backendRequest(requestType, requestTarget, requestData?, useUserToken?): Observable<any> {
    if (!this.headerService.authToken) {
      const req = this.getClientAccessToken()
        .pipe(flatMap(
          (response) => {
            const authToken = response;
            this.headerService.authToken = authToken.access_token;
            return this.baseBackendRequest(requestType, requestTarget, requestData, useUserToken);
          }));
      return req;
    } else {
      return this.baseBackendRequest(requestType, requestTarget, requestData, useUserToken);
    }
  }

  private baseBackendRequest(requestType, requestTarget, requestData?, useUserToken?): Observable<any> {
    if (requestType === 'post') {
      return this.http.post(
        environment.apiUrl + requestTarget,
        requestData,
        { headers: this.headerService.getContentHeaders(useUserToken) }
      );
    } else if (requestType === 'get') {
      return this.http.get(
        environment.apiUrl + requestTarget,
        { headers: this.headerService.getContentHeaders(useUserToken), params: requestData, observe: 'response'}
      );
    }
  }


  registerUser(data): Observable<any> {
    return this.backendRequest('post', 'account/register', data);
  }

  validateEmail(token: string): Observable<any> {
    const data = {
      ValidationCode: token
    };
    return this.backendRequest('get', 'account/ValidateEmail', data);
  }

  resetPassword(data): Observable<any> {
    return this.backendRequest('post', 'account/ResetPassword', data);
  }

  updatePassword(data, token): Observable<any> {
    return this.backendRequest('post', 'UserService/UpdatePassword', data, token);
  }

  updateEmail(data, token): Observable<any> {
    return this.backendRequest('post', 'UserService/UpdateEmail', data, token);
  }

  updateStudentInfo(data, token): Observable<any> {
    return this.backendRequest('post', 'StudentService/UpdateStudent', data, token);
  }

  updateProfileInfo(data, token): Observable<any> {
    return this.backendRequest('post', 'UserService/UpdateUserInfo', data, token);
  }

  changePassword(email): Observable<any> {
    return this.backendRequest('post', 'account/ChangePassword', email);
  }

  getUserIP(): Observable<any> {
    return this.http.post(environment.IPCheckingServiceUrl, { headers: this.headerService.getFormURLEncodedHeaders()});
  }

  getCurrentUser(): Observable<any> {
    return this.backendRequest('get', 'account/GetByToken', null, true);
  }

  getUserByToken(): Observable<any> {
    return this.backendRequest('get', 'account/GetByToken', null, true);
  }

  getAllSubscriptions(): Observable<any> {
    return this.backendRequest('get', 'SubscriptionService/GetAllSubscriptions', null, true);
  }

  getUserActiveSubscriptions(): Observable<any> {
    return this.backendRequest('get', 'SubscriptionService/GetUserActiveSubscriptions', null, true);
  }

  getStudentInfo(): Observable<any> {
    return this.backendRequest('get', 'StudentService/GetStudentByUserId', null, true);
  }

  sendRequestForSub(data, token): Observable<any> {
    return this.backendRequest('post', 'SubscriptionService/Request4Subscription', data, token);
  }

  confirmRequestForSub(data, token): Observable<any> {
    return this.backendRequest('post', 'SubscriptionService/ConfirmSubscription', data, token);
  }

  sendCodeForCompile(data): Observable<any> {
    return this.backendRequest('post', 'SyntaxChecker/CodeCompiler', data);
  }

  sendIssue(data): Observable<any> {
    return this.backendRequest('post', 'UserService/ReportIssue', data, true);
  }

  getClientAccessToken(): Observable<any> {
    const idsCredentials = environment.identityServerClientCredentials;

    const body = new FormData();
    body.append('client_id', idsCredentials.client_id);
    body.append('client_secret', idsCredentials.client_secret);
    body.append('scope', idsCredentials.scope);
    body.append('grant_type', idsCredentials.grant_type);

    return this.http.post(
      environment.idsUrl + 'connect/token',
      body,
      { headers: this.headerService.getFormURLEncodedHeaders() }
    );
  }

  getUserAccessToken(email, password): Observable<any> {
    const idsCredentials = environment.identityServerUserCredentials;
    const body = new FormData();
    body.append('client_id', idsCredentials.client_id);
    body.append('client_secret', idsCredentials.client_secret);
    body.append('scope', idsCredentials.scope);
    body.append('grant_type', idsCredentials.grant_type);
    body.append('username', email);
    body.append('password', password);

    return this.http.post(
      environment.idsUrl + 'connect/token',
      body,
      { headers: this.headerService.getFormURLEncodedHeaders() }
    );
  }
}
