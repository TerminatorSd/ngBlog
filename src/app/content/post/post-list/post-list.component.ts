import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less']
})
export class PostListComponent implements OnInit {

  private postsList: any;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPostList();
  }

  getPostList() {
    this.postService.getList()
      .subscribe(res => {
        if (res.code === 0) {
          this.postsList = res.data;
        } else {
          console.log('get post list failed');
        }
      });
  }
}
