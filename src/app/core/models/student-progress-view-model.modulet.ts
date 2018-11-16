export class StudentProgressViewModel {

    Id: string;
    StudentId: string;
    CourseId: string;
    AdditionalNotes: string;
    AdditionalPoints: number;
    CreatedOn: Date;
    ModifiedOn: Date;
    HomeworkPoints: number;
    LetMeInPoints: number;
    Week: string;
    Task: string;
    /**
     *
     */
    constructor(id?: string, studentId?: string, courseId?: string, week?: string,
        task?: string, additionalNotes?: string, additionalPoints?: number, createdOn?: Date,
        modifiedOn?: Date, letMeInPoints?: number, homeworkPoints?: number) {
        this.Id = id;
        this.StudentId = studentId;
        this.CourseId = courseId;
        this.Week = week;
        this.Task = task;
        this.AdditionalNotes = additionalNotes;
        this.AdditionalPoints = additionalPoints;
        this.CreatedOn = createdOn;
        this.ModifiedOn = modifiedOn;
        this.LetMeInPoints = letMeInPoints;
        this.HomeworkPoints = homeworkPoints;
    }
}
