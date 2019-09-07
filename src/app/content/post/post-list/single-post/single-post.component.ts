
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.less']
})
export class SinglePostComponent implements OnInit {

  @Input() post;
  constructor() { }

  ngOnInit() {
    // console.log(this.post);
  }
}
