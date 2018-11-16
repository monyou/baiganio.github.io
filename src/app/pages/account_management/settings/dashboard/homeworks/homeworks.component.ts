import { Component, OnInit, AfterViewInit } from '@angular/core';
import { StudentService } from '../../../../../core/services/student/student.service';
import { StudentProgressViewModel } from '../../../../../core/models/student-progress-view-model.modulet';
import * as $ from 'jquery';

@Component({
  selector: 'app-homeworks',
  templateUrl: './homeworks.component.html',
  styleUrls: ['./homeworks.component.scss']
})
export class HomeworksComponent implements OnInit {
  progresses = new Array<StudentProgressViewModel>();

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudentProgresses().subscribe(
      response => {
        response.body.forEach(element => {
          const c = {
            Id: element.id,
            StudentId: element.studentId,
            CourseId: element.courseId,
            AdditionalNotes: element.additionalNotes,
            AdditionalPoints: element.additionalPoints,
            CreatedOn: element.createdOn,
            ModifiedOn: element.modifiedOn,
            HomeworkPoints: element.homeworkPoints,
            LetMeInPoints: element.letMeInPoints,
            Week: element.week,
            Task: element.task
          };
          
          this.progresses.push(c as StudentProgressViewModel);
        });
        console.log(this.progresses);
      },
      err => {
          console.log('getStudentInfo().subscription failed, in ngOnInit() method.\n\t\tCheck it! ' + err.message);
      },
      () => {
          // if (this.studentInfo.IsActive) {
          //   this.notificationFlagUpdateInfo = false;
          // }
          // console.log(this.studentInfo);
          // console.log(this.specialityList);
          // this.loading = false;
      }
  );
  }

  // ngAfterViewInit(): void {
    
  //   $('#pLinie').click(function () {
  //     if ($('#acceptedTerms').is(':checked')) {
  //       $('label:has(#acceptedTerms)').css('color', 'black');
  //     } else {
  //       $('label:has(#acceptedTerms)').css('color', '#999999');
  //     }
  //   });
  // }

}
