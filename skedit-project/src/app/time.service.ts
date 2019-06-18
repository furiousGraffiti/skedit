import { Observable, of, from, observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  whenInSeconds(when: Date): number {
    const hours = when.getHours();
    const minutes = when.getMinutes();
    const seconds = when.getSeconds();
    return (hours * 3600) + (minutes * 60) + seconds;
  }

  getTimeLeft(whenExpires: Date): Observable<number> {
    let timeLeft = this.whenInSeconds(whenExpires);
    timer(0, 1000).subscribe(() => timeLeft = timeLeft--);
    return of(timeLeft);
  }
}
