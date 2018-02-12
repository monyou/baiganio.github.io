export class UserViewModel {

  Id: string;
  Username: string;
  Email: string;
  FirstName: string;
  LastName: string;
  IsEmailConfirmed: boolean;
  TypeOfUser: any;
  CreatedOn: Date;
  LeadSource: any;
  /**
   *
   */
  constructor(id?: string, username?: string, email?: string, password?: string,
      firstname?: string, lastname?: string, isEmailConfirmed?: boolean,
      typeOfUser?: any, createdOn?: Date, leadSource?: any) {
      this.Id = id;
      this.Username = username;
      this.Email = email;
      this.FirstName = firstname;
      this.LastName = lastname;
      this.IsEmailConfirmed = isEmailConfirmed;
      this.TypeOfUser = typeOfUser;
      this.CreatedOn = createdOn;
      this.LeadSource = leadSource;
  }
}