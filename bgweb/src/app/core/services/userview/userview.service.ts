import { Injectable } from '@angular/core';
import { UserViewModel } from '../../models/user-view-model.module';

@Injectable()
export class UserViewService {
  userView = new UserViewModel();
  constructor() { }

  	setUserData(data): void {
		this.userView = data;
	}

	getUserData(): UserViewModel {
		return this.userView;
	}

	logout(): void {
		this.userView = new UserViewModel();
	}	
}
