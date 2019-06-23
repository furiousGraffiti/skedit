import { Injectable } from '@angular/core';
import { Task } from './shared/models/task.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks: Task[] = [
      {id: 1, owner: 'user1', title: 'programming0', description: 'computer science', whenStarts: 0, duration: 3600, priority: 1},
      {id: 1, owner: 'user1', title: 'programming1', description: 'computer science', whenStarts: 3600, duration: 3600, priority: 1},
      {id: 1, owner: 'user1', title: 'programming2', description: 'computer science', whenStarts: 7200, duration: 3600, priority: 1},
      {id: 1, owner: 'user1', title: 'programming3', description: 'computer science', whenStarts: 10800, duration: 3600, priority: 1},
      {id: 1, owner: 'user1', title: 'programming4', description: 'computer science', whenStarts: 14400, duration: 3600, priority: 1},
      {id: 1, owner: 'user1', title: 'programming5', description: 'computer science', whenStarts: 18000, duration: 3600, priority: 1},
      {id: 1, owner: 'user1', title: 'programming6', description: 'computer science', whenStarts: 21600, duration: 3600, priority: 1},
      {id: 1, owner: 'user1', title: 'programming7', description: 'computer science', whenStarts: 25200, duration: 3600, priority: 1},
      {id: 1, owner: 'user1', title: 'programming8', description: 'computer science', whenStarts: 28800, duration: 3600, priority: 1},
      {id: 1, owner: 'user1', title: 'programming9', description: 'computer science', whenStarts: 32400, duration: 3600, priority: 1},
      {id: 1, owner: 'user1', title: 'programming10', description: 'computer science', whenStarts: 36000, duration: 3600, priority: 1},
      {id: 1, owner: 'user1', title: 'programming11', description: 'computer science', whenStarts: 39600, duration: 3600, priority: 1},
      {id: 1, owner: 'user1', title: 'programming12', description: 'computer science', whenStarts: 43200, duration: 3600, priority: 1},
      {id: 1, owner: 'user1', title: 'programming13', description: 'computer science', whenStarts: 46800, duration: 3600, priority: 1},
      {id: 1, owner: 'user1', title: 'programming14', description: 'computer science', whenStarts: 50400, duration: 3600, priority: 1},
      {id: 1, owner: 'user1', title: 'programming15', description: 'computer science', whenStarts: 54000, duration: 3600, priority: 1},
      {id: 1, owner: 'user1', title: 'programming16', description: 'computer science', whenStarts: 57600, duration: 3600, priority: 1},
      {id: 1, owner: 'user1', title: 'programming17', description: 'computer science', whenStarts: 61200, duration: 3600, priority: 1},
      {id: 1, owner: 'user1', title: 'programming18', description: 'computer science', whenStarts: 64800, duration: 3600, priority: 1},
      {id: 1, owner: 'user1', title: 'programming19', description: 'computer science', whenStarts: 68400, duration: 3600, priority: 1},
      {id: 1, owner: 'user1', title: 'programming20', description: 'computer science', whenStarts: 72000, duration: 3600, priority: 1},
      {id: 1, owner: 'user1', title: 'programming21', description: 'computer science', whenStarts: 75600, duration: 3600, priority: 1},
      {id: 1, owner: 'user1', title: 'programming22', description: 'computer science', whenStarts: 79200, duration: 3600, priority: 1},
      {id: 1, owner: 'user1', title: 'programming23', description: 'computer science', whenStarts: 82800, duration: 3600, priority: 1}
    ];

    return {tasks};
  }
}

 // {id: 1, owner: 'user1', title: 'programming3', description: 'computer science',
      // whenStarts: {hours: 3, minutes: 0} , duration: { hours: 3, minutes: 0 }, priority: 1},
      // {id: 1, owner: 'user1', title: 'programming6', description: 'computer science',
      // whenStarts: {hours: 6, minutes: 0} , duration: { hours: 3, minutes: 0 }, priority: 1},
      // {id: 1, owner: 'user1', title: 'programming9', description: 'computer science',
      // whenStarts: {hours: 9, minutes: 0} , duration: { hours: 3, minutes: 0 }, priority: 1},
      // {id: 1, owner: 'user1', title: 'programming12', description: 'computer science',
      // whenStarts: {hours: 12, minutes: 0} , duration: { hours: 3, minutes: 0 }, priority: 1},
      // {id: 1, owner: 'user1', title: 'programming15', description: 'computer science',
      // whenStarts: {hours: 15, minutes: 0} , duration: { hours: 3, minutes: 0 }, priority: 1},
      // {id: 1, owner: 'user1', title: 'programming18', description: 'computer science',
      // whenStarts: {hours: 18, minutes: 0} , duration: { hours: 3, minutes: 0 }, priority: 1},
      // {id: 1, owner: 'user1', title: 'programming21', description: 'computer science',
      // whenStarts: {hours: 21, minutes: 0} , duration: { hours: 3, minutes: 0 }, priority: 1}
