import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { BackendService } from '../backend/backend.service';

@Injectable()
export class InitialUsersService {

  constructor(private http: Http, private backendService: BackendService) { }

  getInitialUsers() {
    return this.backendService
      .backendRequest('get', 'InitialUsers')
      .map((resp: Response) => {return resp.json();}
    );
	}

}
