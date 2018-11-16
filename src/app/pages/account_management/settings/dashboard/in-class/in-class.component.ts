import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BackendService } from '../../../../../core/services/backend/backend.service';
import { HeaderService } from '../../../../../core/services/header/header.service';
import { environment } from '../../../../../../environments/environment';
import { StudentService } from '../../../../../core/services/student/student.service';
import { StudentLoginViewModel } from '../../../../../core/models/student-login-view-model.module';
import { StudentViewModel } from '../../../../../core/models/student-view-model.module';
import * as $ from 'jquery';
@Component({
  selector: 'app-in-class',
  templateUrl: './in-class.component.html',
  styleUrls: ['./in-class.component.scss']
})
export class InClassComponent implements OnInit {
    weekNo: any;
    ipInfo: any;
    message = '';
    errMsg = '';
    loading = false;
    isLetMeInActive = true;
    student = new StudentViewModel();
    studentLogins = new Array<StudentLoginViewModel>();
    courseStartDate = new Date();
    courseEndDate = new Date();
    constructor(private studentService: StudentService, private backendService: BackendService,
        private router: Router, private headerService: HeaderService,
        private http: HttpClient) { }

    ngOnInit() {
        this.loading = true;
        this.studentService.getStudent().subscribe(
            response => {
                this.student = response.body as StudentViewModel;
                console.log(this.student);
            },
            error => {
                this.loading = false;
                this.message = error.error;
                console.log(this.message);
            },
            () => {
                this.getStudentLogins();
            }
        );
    }


    getStudentLogins() {
        this.studentService.getStudentLogins().subscribe(
            response => {
                response.body.forEach(element => {
                    const c = {
                    Id: element.id,
                    StudentId: element.sudentId,
                    Ip: element.ip,
                    Week: element.week,
                    IsCalculated: element.isCalculated,
                    LastLoginDate: element.lastLoginDate,
                    IPStack: element.ipStack
                    };
                    this.studentLogins.push(c as StudentLoginViewModel);
                });
                console.log(this.studentLogins);
            },
            error => {
                this.loading = false;
                this.message = error.error;
                console.log(this.message);
            },
            () => {
                this.loading = false;
                this.proccessLoginsResponse();
            }
        );
    }

    proccessLoginsResponse() {
        if (this.studentLogins.length === 0) {
            this.isLetMeInActive = true;
        }
    }

    trackIP() {
        this.loading = true;
        this.http.get(environment.IPCheckingServiceUrl).subscribe(
            data => {
                this.ipInfo = data;
                console.log(this.ipInfo);
            },
            error => {
                this.errMsg = error.error;
                console.log(this.errMsg);
                this.loading = false;
            },
            () => { this.proccessIP(); }
        );
    }

    proccessIP() {
        console.log(this.ipInfo);
        console.log({StudentId: this.student.Id, IP: this.ipInfo });
        this.studentService.letMeIn({StudentId: this.student.StudentId, IP: this.ipInfo}).subscribe(
            response => { },
            error => {
                this.errMsg = error.error;         
                this.processError();
                this.loading = false;
            },
            () => {
                this.isLetMeInActive = false;
                this.loading = false;
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
        );
    }

    processError() {
        $('#errMsg').toggleClass('d-none');
            setTimeout(() => {
                this.errMsg = '';
                $('#errMsg').toggleClass('d-none');
            }, 3500);
    }
}

