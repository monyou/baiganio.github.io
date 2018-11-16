import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentViewModel } from '../../../core/models/student-view-model.module';
import { BackendService } from '../../../core/services/backend/backend.service';
import { HeaderService } from '../../../core/services/header/header.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDataService } from '../../../core/services/user-data/user-data.service';
import { UserViewModel } from '../../../core/models/user-view-model.module';

@Component({
  selector: 'app-enroll4course',
  templateUrl: './enroll4course.component.html',
  styleUrls: ['./enroll4course.component.scss']
})
export class Enroll4CourseComponent implements OnInit {
  studentDashForm: FormGroup;
  loading = false;
  studentInfo =  new StudentViewModel();
  routeData: string[];
  notificationFlagUpdateInfo = false;
  updateFlagError = false;
  errorOnUpdate: Object[];

  constructor(private fb: FormBuilder, private backendService: BackendService, private userDataService: UserDataService,
    private headerService: HeaderService, private router: Router, private activatedRoute: ActivatedRoute) {
        this.studentDashForm = fb.group({
            // Validations
            studentUniversity: ['', Validators.required],
            studentGitHub: ['', Validators.required],
            studentFN: ['', Validators.required],
            studentSpeciality: ['', Validators.required],
            studentGroup: ['', Validators.required],
            studentYearOfStudy: ['', Validators.required],
            studentYearOfGraduating: ['', Validators.required]
        });
  }

  ngOnInit(): void {
    // this.loading = true;
    // this.backendService.getStudentInfo().subscribe(
    //     response => {
    //           // this.studentInfo = response.body;
    //           //  console.log(response.body);
    //           // this.studentDashForm.controls['studentUniversity'].setValue(this.studentInfo['university'], { onlySelf: true });
    //           // this.studentDashForm.controls['studentGitHub'].setValue(response.body.gitHubProfileUrl, { onlySelf: true });
    //           // this.studentDashForm.controls['studentFN'].setValue(response.body.facultyNumber, { onlySelf: true });
    //           // this.studentDashForm.controls['studentSpeciality'].setValue(response.body.speciality, { onlySelf: true });
    //           // this.studentDashForm.controls['studentGroup'].setValue(response.body.group, { onlySelf: true });
    //           // this.studentDashForm.controls['studentYearOfStudy'].setValue(response.body.yearOfStudy, { onlySelf: true });
    //           // this.studentDashForm.controls['studentYearOfGraduating'].setValue(response.body.yearOfGraduating, { onlySelf: true });
    //     },
    //     err => {
    //         console.log('getStudentInfo().subscription failed, in ngOnInit() method.\n\t\tCheck it! ' + err.message);
    //     },
    //     () => {
    //         // console.log(this.studentInfo);
    //         // console.log(this.routeData);
    //         this.loading = false;
    //     }
    // );
  }

  isUserLogged(): boolean {
    if (this.headerService.userToken) {
      const storedUser = this.userDataService.userData as UserViewModel;
      if (storedUser['id']) {
        return true;
      } else {
        return false;
      }
    } else {
     return false;
    }
  }

  updateStudentInfo(formDirective) {
    this.loading = true;
    this.studentInfo.GitHubProfileUrl = this.studentDashForm.controls['studentGitHub'].value;
    this.studentInfo.University = this.studentDashForm.controls['studentUniversity'].value;
    this.studentInfo.FacultyNumber = this.studentDashForm.controls['studentFN'].value;
    this.studentInfo.Speciality = this.studentDashForm.controls['studentSpeciality'].value;
    this.studentInfo.Group = this.studentDashForm.controls['studentGroup'].value;
    this.studentInfo.YearOfStudy = this.studentDashForm.controls['studentYearOfStudy'].value;
    this.studentInfo.YearOfGraduating = this.studentDashForm.controls['studentYearOfGraduating'].value;

    this.backendService.updateStudentInfo(this.studentInfo, this.headerService.pickUserToken()).subscribe(
      response => this.handleSuccess(response, formDirective),
        err => this.handleError(err, formDirective)
    );
  }
  handleError(error, directive): void {
    this.loading = false;
    this.updateFlagError = true;
    this.errorOnUpdate = error.error;
    // console.log(this.errorOnUpdate);
    directive.form.markAsPristine();
    directive.form.markAsUntouched();
    setTimeout(() => {
        this.updateFlagError = false;
    }, 3500);
  }
  handleSuccess(data, directive): void {
    this.notificationFlagUpdateInfo = true;
    directive.form.markAsPristine();
    directive.form.markAsUntouched();
    this.loading = false;
    setTimeout(() => {
        this.notificationFlagUpdateInfo = false;
    }, 1500);
  }
}
