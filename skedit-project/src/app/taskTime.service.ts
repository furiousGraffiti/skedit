import { TaskTime } from './shared/models/taskTime.model';
import { Observable, of, from, observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskTimeService {

  constructor() { }

  convertTaskTimeToString(taskTime: TaskTime, makeEng: boolean = false): string {
    let string = '';
    let pm = false;
    if (makeEng && (taskTime.hours > 12)) {
      taskTime.hours -= 12;
      console.log('pm before: ' + pm + ' ' + taskTime.hours);
      pm = true;
      console.log('pm after: ' + pm + ' ' + taskTime.hours);
    }
    console.log('pm after_after: ' + pm + ' ' + taskTime.hours);
    if (taskTime.hours < 10) {
      string += '0' + taskTime.hours;
    } else {
      string += taskTime.hours;
    }
    string += ':';
    if (taskTime.minutes < 10) {
      string += '0' + taskTime.minutes;
    } else {
      string += taskTime.minutes;
    }
    if (makeEng) {
      if (pm) {
        string += 'pm';
      } else {
        string += 'am';
      }
    }
    return string;
  }

  convertTaskTimeToSeconds(taskTime: TaskTime): number {
    console.log(taskTime.hours * 3600 + taskTime.minutes * 60);
    return taskTime.hours * 3600 + taskTime.minutes * 60;
  }

  convertSecondsToString(getSeconds: number): string {
    const hours: number = (getSeconds / 3600 << 0);
    const minutes: number = (getSeconds / 60 << 0) - hours * 60;
    return hours + ':' + minutes + ' h';
  }
}
