import { Component, OnInit } from '@angular/core';
import { CourseViewModel } from '../../core/models/course-view-model.module';
import { CourseService } from '../../core/services/course/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: CourseViewModel[];

  constructor(public courseService: CourseService) { }

  ngOnInit() {
    this.courseService
    .getCourses()
    .subscribe((courses: CourseViewModel[]) => {
        this.courses  = courses;   
    })
  }

}
