import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
}
