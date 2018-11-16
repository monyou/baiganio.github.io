import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../../../core/services/course/course.service';
import { StudentService } from '../../../../../core/services/student/student.service';
import { HeaderService } from '../../../../../core/services/header/header.service';
import { UserDataService } from '../../../../../core/services/user-data/user-data.service';
import { UserViewModel } from '../../../../../core/models/user-view-model.module';
import { StudentViewModel } from '../../../../../core/models/student-view-model.module';
import { CourseViewModel } from '../../../../../core/models/course-view-model.module';

@Component({
  selector: 'app-courses-and-scores',
  templateUrl: './courses-and-scores.component.html',
  styleUrls: ['./courses-and-scores.component.scss']
})
export class CoursesAndScoresComponent implements OnInit {
  storedUser = new UserViewModel();
  student = new StudentViewModel();
  courses = new Array<CourseViewModel>();
  studentCourses = new Array<CourseViewModel>();

  public chartOptions: any = {
    responsive: true
  };
  public chartType = 'pie';
  // public chartData: Array<any> = [300, 50, 100];
  public chartData: Array<any> = [1, 1, 1];
  public chartLabels: Array<any> = ['Standalone work', 'Current Exams', 'Final Exam'];
  public chartColors: Array<any> = [{
      hoverBorderColor: [
        'rgba(0, 0, 0, 0.1)',
        'rgba(0, 0, 0, 0.1)',
        'rgba(0, 0, 0, 0.1)',
        'rgba(0, 0, 0, 0.1)',
        'rgba(0, 0, 0, 0.1)'
      ],
      hoverBorderWidth: 0,
      backgroundColor: [
        '#6bbaea', // blue
        '#30e542', // green
        '#f7f438', // yellow
        '#949FB1',
        '#4D5360'
      ],
      hoverBackgroundColor: ['#1c7ded', '#09c40c', '#fcf40f', '#A8B3C5', '#616774']
  }];

  constructor(public courseService: CourseService, public studentService: StudentService, private headerService: HeaderService,
    private userDataService: UserDataService) { }

  ngOnInit() {
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
          if (c.IsActive) {
            this.courses.push(c as CourseViewModel);
          }
        });
        // console.log(this.courses);
      },
      error => {
        // this.loading = false;
        // console.log(error);
      },
      () => { }
    );



  }

  proccessResponse(response) {
    this.student = response.body;
    // console.log(this.student.Courses);
  }

  isStudentCourse(courseId) {
    // console.log(this.student);
    const jo = this.student.Courses as Array<CourseViewModel>;
    jo.forEach(element => {
      // console.log(element);
      // let jo = element.courseId;
      // if (jo === courseId) {
      //   return true;
      // }
      // return false;
    });
    return false;
  }


  public getStudentWebhookUrl(students): string {
    let jo = '';
    students.forEach(element => {
      if (element.studentId === this.student['id']) {
        // console.log(this.student['webhookUrls'][0]);
        jo =  this.student['webhookUrls'][0] as string;
        return jo;
      }
    });
    return jo;
  }
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
