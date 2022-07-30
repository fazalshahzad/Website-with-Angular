import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseMessengerService {

  _subjectNotification = new ReplaySubject(1);

  constructor() { }

  sendMessengerWithData(playLoad:any){
    this._subjectNotification.next(playLoad);
  }
  getMessengerWithData(){
    return this._subjectNotification.asObservable();
  }
}
