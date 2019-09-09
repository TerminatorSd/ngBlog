import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from './service/event-emitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  msgs = [];
  title = 'ngBlog';

  constructor(private eventEmitterService: EventEmitterService) {}

  ngOnInit() {
    this.eventEmitterService.eventEmit.subscribe((value: any) => {
      if (value) {
        const { severity, summary, detail } = value;
        this.msgs = [{ severity, summary, detail, life: 2000 }];
      }
    });

  }
}
