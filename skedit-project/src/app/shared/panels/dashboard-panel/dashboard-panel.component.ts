import { TaskService } from './../../../task.service';
import { Task } from './../../models/task.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-panel',
  templateUrl: './dashboard-panel.component.html',
  styleUrls: ['./dashboard-panel.component.css']
})
export class DashboardPanelComponent implements OnInit {

  today: number;
  allTasks = new Array<Task>();
  currentTask = new Task();
  nextTask = new Task();
  furtherTasks: Task[];

  constructor(private taskService: TaskService) {
    this.getTasks();
  }

  ngOnInit() {
    this.getFurtherTasks();
    this.today = Date.now();
    this.allTasks = [];
    this.currentTask = this.allTasks[0];
    this.currentTask.title = 'lmao';
    this.nextTask = this.allTasks[1];
  }

  getFurtherTasks(): void {
    for (let i = 0; i < this.allTasks.length; i++) {
      if (i > 1) {
        this.furtherTasks = this.allTasks;
      }
    }
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(allTasks => this.allTasks = allTasks);
  }

}
