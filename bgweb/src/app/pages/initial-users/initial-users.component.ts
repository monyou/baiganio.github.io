import { Component, OnInit } from '@angular/core';
import { InitialUsersService } from '../../core/services/initial-users/initial-users.service';
import { UserViewModel } from '../../core/models/user-view-model.module';

@Component({
  selector: 'app-initial-users',
  templateUrl: './initial-users.component.html',
  styleUrls: ['./initial-users.component.css']
})
export class InitialUsersComponent implements OnInit {

  users: UserViewModel[];

  constructor(public initUserService: InitialUsersService) { }

  ngOnInit() {
    this.initUserService
    .getInitialUsers()
    .subscribe((initUsers: UserViewModel[]) => {
        this.users  = initUsers;   
    })
  }

}
