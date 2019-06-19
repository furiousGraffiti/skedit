import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './shared/models/task.model';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksUrl: string;

  constructor(private http: HttpClient) {
    this.tasksUrl = 'api/tasks';
  }

  getTasks (): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  getTasksMock (): Observable<Task[]> {
    const tasks: Task[] = [
      {id: 1, owner: 'user1', title: 'programming1', description: 'computer science',
      whenStarts: {hours: 2, minutes: 10} , duration: { hours: 2, minutes: 0 }, priority: 1},
      {id: 1, owner: 'user1', title: 'programming2', description: 'computer science',
      whenStarts: {hours: 4, minutes: 10} , duration: { hours: 1, minutes: 0 }, priority: 1},
      {id: 1, owner: 'user1', title: 'programming3', description: 'computer science',
      whenStarts: {hours: 8, minutes: 10} , duration: { hours: 1, minutes: 0 }, priority: 1},
      {id: 1, owner: 'user1', title: 'programming4', description: 'computer science',
      whenStarts: {hours: 10, minutes: 10} , duration: { hours: 1, minutes: 0 }, priority: 1},
    ];
    return of(tasks);
  }
}
