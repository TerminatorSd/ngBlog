import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-manage-post-list',
  templateUrl: './manage-post-list.component.html',
  styleUrls: ['./manage-post-list.component.less']
})
export class ManagePostListComponent implements OnInit {

  private postsList: any;
  private alertVar: Object = {
    show: false,
    text: 'alert',
    type: 'success'
  };

  constructor(private postService: PostService, private messageService: MessageService) { }

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

  deletePost(id: string) {
    this.postService.deletePost(id)
      .subscribe(res => {
        if (res.code === 0) {
          this.messageService.showAlert(this, '删除成功~', 'success');
          this.getPostList();
        } else {
          this.messageService.showAlert(this, '删除失败!', 'error');
        }
      });
  }

}
