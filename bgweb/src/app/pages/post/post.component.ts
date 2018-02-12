import { Component, OnInit } from '@angular/core';
import { PostService } from '../../core/services/posts/post.service';
import { PostViewModel } from '../../core/models/post-view-model.module';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: PostViewModel[];

  constructor(public courseService: PostService) { }

  ngOnInit() {
    this.courseService
    .getCourses()
    .subscribe((posts: PostViewModel[]) => {
        this.posts  = posts;   
    })
  }

}
