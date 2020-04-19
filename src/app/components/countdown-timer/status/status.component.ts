import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { TimerStatusModel } from 'src/app/models/timerStatus.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  messages: Array<TimerStatusModel>;
  statsObservable: Observable<any>;
  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.messages = this.messageService.messages;
    this.statsObservable = this.messageService.getStats();
  }

}
