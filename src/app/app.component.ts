import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  msgs = [];
  title = 'ngBlog';

  ngOnInit() {
    // this.msgs = [{ severity: 'success', summary: '摘要', detail: '测试换行，测试换行，测试换行' }];
  }
}
