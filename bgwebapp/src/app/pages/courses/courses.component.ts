import { Component, OnInit } from '@angular/core';
import { CourseViewModel } from '../../core/models/course-view-model.module';
import { CourseService } from '../../core/services/course/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  loading = false;
  courses: CourseViewModel[];

  constructor(public courseService: CourseService) { }

  ngOnInit() {
    this.loading = true;
    this.courseService
    .getCourses()
    .subscribe((courses: CourseViewModel[]) => {
        this.courses  = courses;
        this.loading = false;
    });
  }

}