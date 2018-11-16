import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { UserDataService } from '../user-data/user-data.service';
import { UtilityService } from '../utility/utility.service';

@Injectable()
export class HeaderService {
  authToken;
  adminToken;
  private _userToken;
  get userToken() { return this._userToken; }
  set userToken(token) {
    if (token && token.access_token) {
      this._userToken = token.access_token;
    } else {
      this._userToken = token;
    }
  }

  constructor(private userDataService: UserDataService, private utilityService: UtilityService) {
    if (this.utilityService.isLocalStorageNameSupported()) {
      this.userToken = localStorage.getItem('bgapi_user_token');
    }
  }

  clearUserToken() {
    this.userToken = null;
    this.userDataService.logout();
  }

  setUserTokenAndRemember(token) {
    this.clearUserToken();
    this.userToken = token.access_token;
    if (this.utilityService.isLocalStorageNameSupported()) {
      localStorage.setItem('bgapi_user_token', this.userToken);
    }
  }

  getContentHeaders(useUserToken?): HttpHeaders {
    let contentHeaders = new HttpHeaders();
    let authToken = this.pickAuthenticationToken();
    if (useUserToken) { authToken = this.userToken; }
    contentHeaders = contentHeaders.set('Authorization', `Bearer ${authToken}`);
    return contentHeaders;
  }

 getFormURLEncodedHeaders(): HttpHeaders {
  return new HttpHeaders();
 }

  pickAuthenticationToken(): string {
     return this.authToken;
    // return this.userToken;
  }
  pickUserToken(): string {
    return this.userToken;
  }
}
