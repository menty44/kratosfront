import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject('false');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    console.log('service check ', message);
    this.messageSource.next(message)
  }

  returnTrue(message: string) {
    console.log('service check ', message);
    return this.messageSource.next(message)
  }
}
