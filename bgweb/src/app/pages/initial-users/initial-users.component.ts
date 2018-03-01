import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { InitialUsersService } from '../../core/services/initial-users/initial-users.service';
import { UserViewModel } from '../../core/models/user-view-model.module';

@Component({
  selector: 'app-initial-users',
  templateUrl: './initial-users.component.html',
  styleUrls: ['./initial-users.component.css']
})
export class InitialUsersComponent implements OnInit {

  public loading = false;
  users: UserViewModel[];

  constructor(private spinner: NgxSpinnerService, public initUserService: InitialUsersService) { }

  ngOnInit() {
    this.spinner.show();
    this.initUserService
    .getInitialUsers()
    .subscribe((initUsers: UserViewModel[]) => {
      this.spinner.hide();
      this.users  = initUsers;   
      //...
    }, err => {
      this.spinner.hide();
      //...
    });

    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 2000);
  }

}
