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
  timeLeft: number;
  allTasks: Array<Task>;
  whenExpires: Date = this.allTasks[0].when;

  constructor(
    private taskService: TaskService,
    private timeService: TimeService
    ) {}

  ngOnInit() {
    this.getTasks();
    this.getTimeLeft();
  }

  getTimeLeft(): void {
    this.whenExpires.setHours(5);
    this.whenExpires.setMinutes(50);
    this.timeService.getTimeLeft(this.whenExpires).subscribe((t) => this.timeLeft = t);
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(allTasks => this.allTasks = allTasks);
  }
}
