import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HeaderService } from '../header/header.service';
import { UserDataService } from '../user-data/user-data.service';
import { BackendService } from '../backend/backend.service';
import { UserViewModel } from '../../models/user-view-model.module';

@Injectable()
export class AuthGuard implements CanActivate {
  storedUser = new UserViewModel();
  constructor(private router: Router, private headerservice: HeaderService,
    private userDataService: UserDataService, private backendService: BackendService) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.headerservice.userToken) {
      this.storedUser = this.userDataService.getUserData();
      if (this.storedUser.Id  === undefined) {
        this.backendService.getCurrentUser().subscribe(
          response => {
            this.storedUser = response.body;
          },
          error => { console.log('auth guard error!'); this.router.navigate(['/login']); return false; },
          () => {
            this.userDataService.setUserData(this.storedUser);
          }
        );
      }
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
