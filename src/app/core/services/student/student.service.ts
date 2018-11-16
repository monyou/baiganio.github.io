import { Injectable } from '@angular/core';
import { BackendService } from '../backend/backend.service';
import { Observable } from 'rxjs';

@Injectable()
export class StudentService {

  constructor(private backendService: BackendService) { }

  letMeIn(data): Observable<any> {
    return this.backendService.backendRequest('post', 'StudentService/LetMeIn', data, true);
  }

  getStudentLogins(): Observable<any> {
    return this.backendService.backendRequest('get', 'StudentService/GetStudentLogins', null, true);
  }

  getStudentProgresses(): Observable<any> {
    return this.backendService.backendRequest('get', 'StudentService/GetStudentProgresses', null, true);
  }

  getStudent(): Observable<any> {
    return this.backendService.backendRequest('get', 'StudentService/GetStudentByUserId', null, true);
  }

  getCoursesAndScores(): Observable<any> {
    return this.backendService.backendRequest('get', 'StudentService/GetCoursesAndScores', null, true);
  }
}
