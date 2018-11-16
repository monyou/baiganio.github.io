import { Injectable } from '@angular/core';
import { BackendService } from '../backend/backend.service';
import { Observable } from 'rxjs';

@Injectable()
export class CourseService {

  constructor(private backendService: BackendService) { }

  getCourses(): Observable<any> {
    return this.backendService.backendRequest('get', 'CourseService/GetAllCourses', null, false);
  }

  enroll4Course(courseId: string): Observable<any> {
    return this.backendService.backendRequest('post', 'CourseService/Enroll4Course', {CourseId: courseId}, true);
  }
}
