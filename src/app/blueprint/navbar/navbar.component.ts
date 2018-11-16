import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../core/services/header/header.service';
import * as $ from 'jquery';
import { UserDataService } from '../../core/services/user-data/user-data.service';
import { UserViewModel } from '../../core/models/user-view-model.module';
import { BackendService } from '../../core/services/backend/backend.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  storedUser: any;
  reportIssueModalVisibility = false;
  
  constructor(private router: Router, private headerService: HeaderService, private userDataService: UserDataService,
    private backendService: BackendService) { 

  }

  ngOnInit() {
    if (this.headerService.userToken) {
      this.backendService.getCurrentUser().subscribe(
        response => {
            this.storedUser = response.body as UserViewModel;
        },
        error => { },
        () => {
          this.userDataService.setUserData(this.storedUser);
        }
      );
    }
  }

  ngAfterViewInit(): void {
    // Mobile View navbar effects
    $('#slide-outBtn').click(function () {
      $('#sidenav-overlay').toggleClass('d-none');
      $('#slide-out').toggleClass('d-none');
    });

    $('#sidenav-overlay').click(function() {
      $('#slide-out').toggleClass('d-none');
      $('#sidenav-overlay').toggleClass('d-none');
    });
  }

  isUserLogged(): boolean {
    let letGo = false;
    if (this.headerService.userToken) {
      this.storedUser = this.userDataService.getUserData();
      if (this.storedUser) {
        // console.log('true =>' + this.storedUser);
        letGo = true;
      } else { letGo = false; }
    }
    return letGo;
  }

  logOut() {
    this.headerService.clearUserToken();
    this.router.navigate(['/login']);
  }

  changeReportIssueModalVisibility(){
    setTimeout(()=>{
      this.reportIssueModalVisibility = !this.reportIssueModalVisibility;
    },0);
  }
}
