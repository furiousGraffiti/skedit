import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  currentTaskTimer(): Observable<string> {
    return of('to do');
  }
}
