import { Task } from './shared/models/task.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks: Task[] = [
      {id: 1, owner: 'o1', title: 't1', description: 'd1', when: 'h1', priority: 1},
      {id: 2, owner: 'o1', title: 't2', description: 'd2', when: 'h2', priority: 2},
      {id: 3, owner: 'o1', title: 't3', description: 'd3', when: 'h3', priority: 3},
      {id: 4, owner: 'o2', title: 't1', description: 'd1', when: 'h1', priority: 1}
    ];

    return {tasks};
  }
}
