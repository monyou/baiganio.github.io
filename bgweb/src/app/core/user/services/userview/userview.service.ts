import { UserView } from './../../models/userView.module';
import { Injectable } from '@angular/core';

@Injectable()
export class UserViewService {
  userView = new UserView();
  constructor() { }

  	setUserData(data): void {
		this.userView = data;
	}

	getUserData(): UserView {
		return this.userView;
	}

	logout(): void {
		this.userView = new UserView();
	}	
}
