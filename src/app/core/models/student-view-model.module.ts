import { CourseViewModel } from './course-view-model.module';

export class StudentViewModel {
  Id: string;
  StudentId: string;
  SubscriptionId: string;
  FirstName: string;
  LastName: string;
  University: string;
  GitHubProfileUrl: string;
  FacultyNumber: string;
  Speciality: string;
  Group: string;
  YearOfStudy: number;
  YearOfGraduating: number;
  IsActive: boolean;
  IsCompleted: boolean;
  Courses:  Array<CourseViewModel>;
  Progress: Object[];
  WebhookUrls: Object[];

  constructor(id?: string,studentId?: string, subscriptionId?: string, firstName?: string, lastName?: string, university?: string,
      gitHubProfileUrl?: string, facultyNumber?: string, speciality?: string, group?: string,
      yearOfStudy?: number, yearOfGraduating?: number, isActive?: boolean, isCompleted?: boolean,
      courses?: Array<CourseViewModel>, progress?: Object[], webhooks?: Object[]) {
        this.Id = id;
        this.StudentId = studentId;
        this.SubscriptionId = subscriptionId;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.University = university;
        this.GitHubProfileUrl = gitHubProfileUrl;
        this.FacultyNumber = facultyNumber;
        this.Speciality = speciality;
        this.Group = group;
        this.YearOfStudy = yearOfStudy;
        this.YearOfGraduating = yearOfGraduating;
        this.IsActive = isActive;
        this.IsCompleted = isCompleted;
        this.Courses = courses;
        this.Progress = progress;
        this.WebhookUrls = webhooks;
  }
}
