import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StudentViewModel } from '../../../../../core/models/student-view-model.module';
import { BackendService } from '../../../../../core/services/backend/backend.service';
import { HeaderService } from '../../../../../core/services/header/header.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss']
})
export class StudentInfoComponent implements OnInit {
  studentDashForm: FormGroup;
  studentInfo =  new StudentViewModel();
  notificationFlagUpdateInfo = false;
  loading = false;
  errMsg = '';
  specialityList = ['Software Technologies & Design', 'Software Engeneering', 'Informatics', 'BIT', 'ITMOM', 'MI', 'MIIT'];
  groupsList = ['1A', '1B', '2A', '2B', '3A', '3B'];
  routeData: string[];

  constructor(private fb: FormBuilder, private backendService: BackendService,
      private headerService: HeaderService, private router: Router, private activatedRoute: ActivatedRoute) {
          this.studentDashForm = fb.group({
            // Validations
            studentUniversity: [null, Validators.required],
            studentGitHub: [null, Validators.required],
            studentFN: [null, Validators.required],
            studentSpeciality: [null, Validators.required],
            studentGroup: [null, Validators.required],
            studentYearOfStudy: [null, Validators.required],
            studentYearOfGraduating: [null, Validators.required]
          });
  }

  ngOnInit(): void {
      this.loading = true;
      this.backendService.getStudentInfo().subscribe(
          response => {
                this.studentInfo = response.body;
                this.studentDashForm.controls['studentUniversity'].setValue(this.studentInfo['university'], { onlySelf: true });
                this.studentDashForm.controls['studentGitHub'].setValue(response.body.gitHubProfileUrl, { onlySelf: true });
                this.studentDashForm.controls['studentFN'].setValue(response.body.facultyNumber, { onlySelf: true });
                this.studentDashForm.controls['studentSpeciality'].setValue(response.body.speciality, { onlySelf: true });
                this.studentDashForm.controls['studentGroup'].setValue(response.body.group, { onlySelf: true });
                this.studentDashForm.controls['studentYearOfStudy'].setValue(response.body.yearOfStudy, { onlySelf: true });
                this.studentDashForm.controls['studentYearOfGraduating'].setValue(response.body.yearOfGraduating, { onlySelf: true });
          },
          err => {
              console.log('getStudentInfo().subscription failed, in ngOnInit() method.\n\t\tCheck it! ' + err.message);
          },
          () => {
              if (this.studentInfo.IsActive) {
                this.notificationFlagUpdateInfo = false;
              }
              this.loading = false;
          }
      );
  }

  updateStudentInfo() {
      this.loading = true;
      this.studentInfo.GitHubProfileUrl = this.studentDashForm.controls['studentGitHub'].value;
      this.studentInfo.University = this.studentDashForm.controls['studentUniversity'].value;
      this.studentInfo.FacultyNumber = this.studentDashForm.controls['studentFN'].value;
      this.studentInfo.Speciality = this.studentDashForm.controls['studentSpeciality'].value;
      this.studentInfo.Group = this.studentDashForm.controls['studentGroup'].value;
      this.studentInfo.YearOfStudy = this.studentDashForm.controls['studentYearOfStudy'].value;
      this.studentInfo.YearOfGraduating = this.studentDashForm.controls['studentYearOfGraduating'].value;

      this.backendService.updateStudentInfo(this.studentInfo, this.headerService.pickUserToken()).subscribe(
          response => {},
          error => {
            this.processError(error);
            this.studentDashForm.markAsPristine();
            this.studentDashForm.markAsUntouched();
            this.loading = false;
          },
          () => {
            this.notificationFlagUpdateInfo = true;
            this.studentDashForm.markAsPristine();
            this.studentDashForm.markAsUntouched();
            this.loading = false;
            setTimeout(() => {
                this.notificationFlagUpdateInfo = false;
            }, 3500);
          }
      );
  }

  processError(err) {
    this.errMsg = err.error;
    $('#errMsg').toggleClass('d-none');
    setTimeout(() => {
        this.errMsg = '';
        $('#errMsg').toggleClass('d-none');
    }, 4000);
  }
}
