import { Component, OnInit } from '@angular/core';
import { CourseViewModel } from '../../core/models/course-view-model.module';
import { CourseService } from '../../core/services/course/course.service';
import * as $ from 'jquery';
import { UserViewModel } from '../../core/models/user-view-model.module';
import { HeaderService } from '../../core/services/header/header.service';
import { UserDataService } from '../../core/services/user-data/user-data.service';
import { BackendService } from '../../core/services/backend/backend.service';
import { StudentViewModel } from '../../core/models/student-view-model.module';
import { StudentService } from '../../core/services/student/student.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  loading = false;
  isStudent = false;
  flagEnrollSuccess = false;
  msgLogIn = '';
  fetchingMsg = '';
  msgIncompleteStudent = '';
  totalStudents = 0;
  courses = new Array<CourseViewModel>();
  storedUser = new UserViewModel();
  student = new StudentViewModel();
  constructor(public courseService: CourseService, public studentService: StudentService, private headerService: HeaderService,
    private userDataService: UserDataService, private backendService: BackendService) { }

  ngOnInit() {
    this.loading = true;
    this.courseService.getCourses().subscribe(
      response => {
        response.body.forEach(element => {
          const c = {
            Id: element.id,
            Name: element.name,
            TeacherName: element.teacher_name,
            Description: element.description,
            StartDate: element.start_date,
            EndDate: element.end_date,
            CreatedOn: element.created_on,
            Image2Base64: element.image,
            Students: element.students as Array<StudentViewModel>,
            IsActive: element.is_active,
            TotalUsers: element.students.length
          };
          this.courses.push(c as CourseViewModel);
        });
        console.log(this.courses);
      },
      error => {
        this.loading = false;
        console.log(error);
      },
      () => { this.loading = false; }
    );

    if (this.headerService.authToken) {
      this.studentService.getStudent().subscribe(
        response => {
          this.proccessResponse(response);
        },
        error => {
          // this.loading = false;
          // console.log(error);
        },
        () => {
          // this.loading = false;
          // console.log(this.student);
        }
      );
    }
  }
  proccessResponse(response) {
    this.student = response.body;
    // console.log(this.student);
  }

  getTotatlUsers(courseId: string) {
    return this.courses.forEach(element => {
      if (courseId === element.Id) {
        return element.TotalUsers;
      }
    });
  }

  enroll(courseId: string) {
    if (this.isUserLogged() === false) {
      $('#msgLogIn').toggleClass('d-none');
      setTimeout(() => {
        $('#msgLogIn').toggleClass('d-none');
      }, 3500);
      return;
    }
    if (!this.student) {
      $('#msgIncomplete').toggleClass('d-none');
      setTimeout(() => {
        $('#msgIncomplete').toggleClass('d-none');
      }, 4500);
      return;
    }
    let isEnroll = false;
    const cours = this.student['courses'] as Array<CourseViewModel>;
    console.log(cours);
    cours.forEach(e => { if (e['courseId'] === courseId) { isEnroll = true; } });
    if (isEnroll) {
      this.msgLogIn = 'You are already enrolled 4 the course!';
      $('#msgLogIn').toggleClass('d-none');
      setTimeout(() => {
        this.msgLogIn = '';
        isEnroll = false;
        $('#msgLogIn').toggleClass('d-none');
      }, 4500);
      return;
    }
    this.loading = true;
    this.courseService.enroll4Course(courseId).subscribe(
      response => this.handleSuccess(response),
      error => {
        this.loading = false;
        this.msgLogIn = error.error;
        $('#msgLogInUpdate').toggleClass('d-none');
        setTimeout(() => {
          $('#msgLogInUpdate').toggleClass('d-none');
        }, 3500);
        return;
      },
      () => { }
    );
  }

  handleSuccess(response) {
    console.log(response);
    this.flagEnrollSuccess = true;
    this.loading = false;
    setTimeout(() => {
        location.reload();
    }, 2300);
  }

  isUserLogged(): boolean {
    if (this.headerService.userToken) {
      this.storedUser = this.userDataService.getUserData();
      if (this.storedUser['id']) {
        return true;
      }
      this.msgLogIn = 'You need to be logged in to enroll 4 a course!';
      return false;
    }
    this.msgLogIn = 'You need to be logged in to enroll 4 a course!';
    return false;
  }

  isActiveStudent(students): boolean {
    this.storedUser = this.userDataService.getUserData();
      if (this.storedUser['id']) {
        students.forEach(element => {
          console.log(element.studentStatus);
          if (element.studentStatus === 'Active') {
            return true;
          }
        });
        return false;
      }
      return false;
  }
}
