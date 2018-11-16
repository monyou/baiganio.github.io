export class PostViewModel {

    Id: string;
    Author: string;
    Title: string;
    Content: string;
    ImgUrl: string;
    DateCreated: Date;
    DateChanged: Date;
    /**
     *
     */
    constructor(id?: string, title?: string, author?: string, content?: string, 
        imgUrl?: string, dateCreated?: Date, dateChanged?: Date) {
        this.Id = id;
        this.Author = author;
        this.Title = title;
        this.Content = content;
        this.ImgUrl = imgUrl;
        this.DateCreated = dateCreated;
        this.DateChanged = dateChanged;
    }
}
