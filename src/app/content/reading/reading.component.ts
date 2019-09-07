import { Component, OnInit } from '@angular/core';
import { Reading } from 'src/app/model/reading';
import { ReadingService } from 'src/app/service/reading.service';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.less']
})
export class ReadingComponent implements OnInit {
  private inputStr: string;
  private addInfo: Reading;
  private readingList: Array<any>;

  constructor(private readingService: ReadingService) { }

  ngOnInit() {
    this.addInfo = new Reading();
    this.getList();
  }

  publishReading() {
    this.addInfo.status = '1';
    this.readingService.addReading(this.addInfo)
      .subscribe(res => {
        if (res.code === 0) {
          alert('fine');
          this.getList();
        } else {
          console.log('add reading failed');
        }
      });
  }

  getList() {
    this.readingService.getList()
      .subscribe(res => {
        if (res.code === 0) {
          this.readingList = res.data;
        } else {
          console.log('get reading list failed');
        }
      });
  }
}
