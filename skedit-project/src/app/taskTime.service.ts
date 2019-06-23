import { TaskTime } from './shared/models/taskTime.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskTimeService {

  constructor() { }

  convertSecondsToString(getSeconds: number, displaySeconds: string = '', timeSystem: string = ''): string {
    //    console.log('convertTaskTimeToString() works');

    let string = '';
    let pm: boolean;
    let hours: number = (getSeconds / 3600 << 0);
    const minutes: number = (getSeconds / 60 << 0) - hours * 60;
    const seconds: number = getSeconds - (hours * 3600) - (minutes * 60);

    if (timeSystem === '12h-system' && (hours > 12)) {
      hours -= 12;
      pm = true;
    }
    if (hours < 10 && hours >= 0) {
      string += '0' + hours;
    } else {
      string += hours;
    }
    string += ':';
    if (minutes < 10 && minutes >= 0) {
      string += '0' + minutes;
    } else {
      string += minutes;
    }
    if (displaySeconds === 'displaySeconds') {
      string += ':';
      if (seconds < 10 && seconds >= 0) {
        string += '0' + seconds;
      } else {
        string += seconds;
      }
    }
    if (timeSystem === '12h-system') {
      string += ' pm';
    } else {
      string += ' am';
    }

    return string;
  }

  getCurrentTime_sec(): number {
    //    console.log('getCurrentTime_sec() works');
    let date = new Date();
    //    console.log('getCurrentTime_sec(): ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
    //    console.log('getCurrentTime_sec(): returns ' + (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()));
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
  }
}
