import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class InitialUsersService {

  //apiUrl = 'http://localhost:5001/api/InitialUsers';
  apiUrl = 'https://bgapi.azurewebsites.net/api/InitialUsers';

  constructor(private http: Http) { }

  getInitialUsers() {
    // return this.http.get()
    return this.http.get(this.apiUrl)
      .map((resp: Response) => {
        return resp.json();
      });
  }

}
