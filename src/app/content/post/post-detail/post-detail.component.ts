import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.less']
})
export class PostDetailComponent implements OnInit {

  private postId: number;
  private postContent: object;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: Params) => {
      this.postId = params.get('id');
    });
    this.getPostDetail();
  }

  getPostDetail() {
    this.postService.getDetail(this.postId)
      .subscribe(res => {
        if (res.code === 0) {
          this.postContent = res.data;
        } else {
          console.log('get post detail failed');
        }
      });
  }

}
