import { Component, OnInit } from '@angular/core';
import { InitialUsersService } from '../../core/services/initial-users/initial-users.service';

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
        //console.log(this.users);
      })
      
  }

}
