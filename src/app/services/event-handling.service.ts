import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventHandlingService {

  constructor() { }
  onPageFinishedEvent: Subject<any> = new Subject<any>();

  pageFinishedEvent(message: any) {
    this.onPageFinishedEvent.next(message);
  }


}
