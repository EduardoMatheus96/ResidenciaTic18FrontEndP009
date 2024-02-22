import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private dataSubject = new BehaviorSubject<string>('Initial data');
  data$ = this.dataSubject.asObservable();

  updateData(newData: string) {
    this.dataSubject.next(newData);
  }

  constructor() { }
}
