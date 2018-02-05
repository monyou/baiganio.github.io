import { InitialUsersService } from './../../app-services/initial-users/initial-users.service';
import { Component, OnInit } from '@angular/core';
import { UserDomain } from '../../app-domains/user/user-domain.model';

@Component({
  selector: 'app-initial-users',
  templateUrl: './initial-users.component.html',
  styleUrls: ['./initial-users.component.css']
})
export class InitialUsersComponent implements OnInit {

  users = [];

  constructor(public initUserService: InitialUsersService) { }

  ngOnInit() {
    this.initUserService.getInitialUsers()
      .subscribe((initUsers: any[]) => {
        this.users  = initUsers;   
        console.log(this.users);
      })
      
  }

}
