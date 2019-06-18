import { TimeService } from './../../../time.service';
import { TaskService } from './../../../task.service';
import { Task } from './../../models/task.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-panel',
  templateUrl: './dashboard-panel.component.html',
  styleUrls: ['./dashboard-panel.component.css']
})
export class DashboardPanelComponent implements OnInit {
  date = Date.now();
  allTasks: Array<Task>;
  timer: string;

  constructor(
    private taskService: TaskService,
    private timeService: TimeService
    ) {}

  ngOnInit() {
    this.getTasks();
    this.currentTaskTimer();
  }

  currentTaskTimer(): void {
    this.timeService.currentTaskTimer().subscribe(timer => this.timer = timer);
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(allTasks => this.allTasks = allTasks);
  }
}
