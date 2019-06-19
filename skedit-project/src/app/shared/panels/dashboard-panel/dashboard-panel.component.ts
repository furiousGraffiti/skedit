import { CutTask } from '../../models/cutTask.model';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { TaskTimeService } from 'src/app/taskTime.service';
import { Task } from '../../models/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-dashboard-panel',
  templateUrl: './dashboard-panel.component.html',
  styleUrls: ['./dashboard-panel.component.css']
})
export class DashboardPanelComponent implements OnInit {
  allTasks: Task[];
  cutTasks: CutTask[];
  todayIs: number;
  taskExpiresIn_seconds: number; // logic
  taskExpiresIn_string: string;  // view
  timer: any;

  constructor(
    private taskService: TaskService,
    private taskTimeService: TaskTimeService
    ) {
      console.log('dashboardPanelComponent works');
      this.allTasks = [];
      this.todayIs = Date.now();
      this.taskExpiresIn_seconds = 0;
      this.taskExpiresIn_string = '';
      this.cutTasks = new Array<CutTask>();
    }

  ngOnInit() {
    this.getTasks();
  }

  displayCurrentTaskTimer(): void {
    console.log('displayTimeLeft() works');
    this.taskExpiresIn_seconds = this.taskTimeService.convertTaskTimeToSeconds(this.allTasks[0].duration);

    this.timer = timer(1000, 1000).subscribe(() => {
      this.taskExpiresIn_string = this.taskTimeService.convertSecondsToString(this.taskExpiresIn_seconds);
      this.taskExpiresIn_seconds -= 1;
    });
  }

  getTasks(): void {
    console.log('getTask() works');
    this.taskService.getTasks().subscribe(allTasks => {
      this.allTasks = allTasks;
      this.afterGettingTasks();
      for (let i = 0; i < this.allTasks.length; i++) {
        this.cutTasks.push({title: this.allTasks[i].title,
           when: this.taskTimeService.convertTaskTimeToString(this.allTasks[i].whenStarts, true)});
      }
    });
  }

  afterGettingTasks(): void {
    console.log('afterGettingTasks() works');
    this.displayCurrentTaskTimer();
  }

  ngOnDestroy() {
    console.log('ngOnDestroy() works');
    this.timer.unsubscribe();
  }
}
