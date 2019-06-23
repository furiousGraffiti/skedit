import { Component, OnInit } from '@angular/core';
import { TaskTimeService } from 'src/app/taskTime.service';
import { TaskService } from 'src/app/task.service';
import { TruncatedTaskInfo } from '../../models/truncatedTaskInfo.model';
import { Task } from '../../models/task.model';
import { timer } from 'rxjs';

@Component({
   selector: 'app-dashboard-panel',
   templateUrl: './dashboard-panel.component.html',
   styleUrls: ['./dashboard-panel.component.css']
})
export class DashboardPanelComponent implements OnInit {

  // variables used in LOGIC //
  tasks: Task[];
  subscribedGetTasks: any;
  subscribedTimer: any;
  isTimerUnsubscribed: boolean;
  timeSystem: string;

  // variables used in VIEW //
  whenCurrentTaskIsCompleted_str: string;
  currentTaskTimeLeft_str: string;
  currentTaskIndex: number;
  currentDate: number;
  truncatedTasksInfo: TruncatedTaskInfo[];
  howManyTasksHidden: number;
  noTasksLeft: boolean;

  constructor(
    private taskService: TaskService,
    private taskTimeService: TaskTimeService
    ) {
      //    console.log('dashboardPanelComponent() works');

      // variables used in LOGIC //
      this.tasks = [];
      this.currentTaskIndex = 0;
      this.subscribedTimer = false;

      // variables used in VIEW //
      this.currentDate = Date.now();
      this.truncatedTasksInfo = [];
      this.howManyTasksHidden = 2;
      this.noTasksLeft = false;
      this.timeSystem = '12h-system';
    }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    //    console.log('getTask() works');

    this.subscribedGetTasks = this.taskService.getTasks().subscribe(gotTasks => {
       this.tasks = gotTasks;
       this.runWhenGotTask();
    });
  }

  runWhenGotTask(): void {
    //    console.log('runWhenGotTask(): got tasks, their data is used now');
    this.truncateTasks();
    this.startTaskTimer();
  }

  truncateTasks(): void {
    //    console.log('truncateTasks() works');
    let title: any;
    let when: any;

    for (let i = 0; i < this.tasks.length; i++) {

      title = this.tasks[i].title;
      when = this.taskTimeService.convertSecondsToString(this.tasks[i].whenStarts, '', this.timeSystem);

      this.truncatedTasksInfo.push({
      title: title,
      when: when
      });
    }
  }

  startTaskTimer(): void {
    //    console.log('startTaskTimer() works: \n######### TIMER RESTART for index #' + this.currentTaskIndex + ' ##########\n');

    const currentTaskDuration_sec: number = this.tasks[this.currentTaskIndex].duration;
    const whenCurrentTaskStarts_sec: number = this.tasks[this.currentTaskIndex].whenStarts;

    //    console.log('startTaskTimer(): currentTaskDuration_sec = ' + this.taskTimeService.convertSecondsToString(currentTaskDuration_sec, '') + '; whenCurrentTaskStarts_sec = ' + this.taskTimeService.convertSecondsToString(whenCurrentTaskStarts_sec), '');
    const whenCurrentTaskIsCompleted_sec = currentTaskDuration_sec + whenCurrentTaskStarts_sec;
    this.whenCurrentTaskIsCompleted_str = this.taskTimeService.convertSecondsToString(whenCurrentTaskIsCompleted_sec, 'displaySeconds', this.timeSystem);

    this.subscribedTimer = timer(1000, 1000).subscribe(() => this.displayTaskTimeLeft(whenCurrentTaskIsCompleted_sec));
  }

  restartTaskTimer(): void {
    //    console.log('restartTaskTimer() works')
    this.subscribedTimer.unsubscribe();
    this.startTaskTimer();
  }

  displayTaskTimeLeft(whenCurrentTaskIsCompleted_sec: number): void {
    //    console.log('displayTaskTimeLeft() works');

    // calculates time left //
    const currentTime_sec = this.taskTimeService.getCurrentTime_sec();
    let currentTaskTimeLeft_sec: number = whenCurrentTaskIsCompleted_sec - currentTime_sec;

    //    console.log('displayTaskTimeLeft(): ' +
    //    this.taskTimeService.convertSecondsToString(whenCurrentTaskIsCompleted_sec, '') + '(whenCurrentTaskCompleted_sec) - ' + this.taskTimeService.convertSecondsToString(currentTime_sec, '') + '(getCurrentTime_sec) = ' + currentTaskTimeLeft_sec);

    // reacts on expiration of task //
    if (currentTaskTimeLeft_sec < 0) {
      if (this.currentTaskIndex < (this.tasks.length - 1)) {
        this.skipCurrentTask();
      } else { // timer stops //
        this.endDisplaying();
      }
    }
    // changes current time left
    //    console.log('displayTaskTimeLeft(): currentTaskTimeLeft_sec = ' + currentTaskTimeLeft_sec);
    this.currentTaskTimeLeft_str = this.taskTimeService.convertSecondsToString(currentTaskTimeLeft_sec, 'displaySeconds');
  }

  endDisplaying(): void {
    this.subscribedTimer.unsubscribe();
    this.isTimerUnsubscribed = true;
    this.noTasksLeft = true;
    this.currentTaskTimeLeft_str = this.taskTimeService.convertSecondsToString(0);
  }

  skipCurrentTask(): void {
    //    console.log('skipCurrentTask() works');
    //    console.log('skipCurrentTask(): task of index ' + this.currentTaskIndex + ' has been skipped');
    if (this.currentTaskIndex < this.tasks.length - 1) {
      this.howManyTasksHidden += 1;
      this.currentTaskIndex += 1;
      this.restartTaskTimer();
    } else {
      this.endDisplaying();
    }
  }

  ngOnDestroy() {
    //    console.log('ngOnDestroy() works');
    this.subscribedGetTasks.unsubscribe();
    if (!this.isTimerUnsubscribed) {
      this.subscribedTimer.unsubscribe();
    }
  }
}
