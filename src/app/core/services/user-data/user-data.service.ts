import { Injectable } from '@angular/core';
import { UserViewModel } from '../../models/user-view-model.module';
import { EventBusService } from '../event-bus/event-bus.service';
import { UtilityService } from '../utility/utility.service';
import { Observable } from '../../../../../node_modules/rxjs';

@Injectable()
export class UserDataService {
  userData = new UserViewModel();
  constructor(private eventBusService: EventBusService, private utilityService: UtilityService) { }

  setUserData(data): void {
    this.userData = data;
    this.eventBusService.emitUpdateUserData(data);
  }
  getUserData() {
    return this.userData;
  }
  logout(): void {
    if (this.utilityService.isLocalStorageNameSupported()) {
      localStorage.removeItem('bgapi_user_token');
    }
    this.userData = null;
  }
}
