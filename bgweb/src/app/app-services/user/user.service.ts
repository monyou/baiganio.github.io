import { UserDomain } from './../../app-domains/user/user-domain.model';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  user = new UserDomain();
  constructor() { }

  setUserData(data): void {
		this.user = data;
	}

	getUserData(): UserDomain {
		return this.user;
	}

	logout(): void {
		this.user = new UserDomain();
	}
}

