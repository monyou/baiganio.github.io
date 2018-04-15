export class CourseViewModel {

    Id: string;
    Name: string;
    Description: string;
    TeacherName: string;
    CreatedOn: Date;
    StartDate: Date;
    EndDate: Date;
    /**
     *
     */
    constructor(id?: string, name?: string, description?: string, 
        teacherName?: string, createdOn?: Date, startDate?: Date,
        endDate?: Date) {
        this.Id = id;
        this.Name = name;
        this.Description = description;
        this.TeacherName = name;
        this.CreatedOn = createdOn;
        this.StartDate = startDate;
        this.EndDate = endDate;
    }
  }