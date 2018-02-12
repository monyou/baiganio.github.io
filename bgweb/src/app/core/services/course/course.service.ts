import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { BackendService } from '../backend/backend.service';

@Injectable()
export class CourseService {

  constructor(private http: Http, private backendService: BackendService) { }

  getCourses() {
    return this.backendService
      .backendRequest('get', 'Course/GetInitialCourses')
      .map((resp: Response) => {return resp.json();}
    );
	}

}
