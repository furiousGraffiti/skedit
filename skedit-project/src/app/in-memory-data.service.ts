import { Injectable } from '@angular/core';
import { Task } from './shared/models/task.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks: Task[] = [
      {id: 1, owner: 'user1', title: 'programming1', description: 'computer science',
      whenStarts: {hours: 2, minutes: 10} , duration: { hours: 2, minutes: 0 }, priority: 1},
      {id: 1, owner: 'user1', title: 'programming2', description: 'computer science',
      whenStarts: {hours: 4, minutes: 10} , duration: { hours: 1, minutes: 0 }, priority: 1},
      {id: 1, owner: 'user1', title: 'programming3', description: 'computer science',
      whenStarts: {hours: 8, minutes: 10} , duration: { hours: 1, minutes: 0 }, priority: 1},
      {id: 1, owner: 'user1', title: 'programming4', description: 'computer science',
      whenStarts: {hours: 21, minutes: 10} , duration: { hours: 1, minutes: 0 }, priority: 1},

    ];

    return {tasks};
  }
}
