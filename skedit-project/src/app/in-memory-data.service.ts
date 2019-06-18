import { Task } from './shared/models/task.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks: Task[] = [
      {id: 1, owner: 'user1', title: 'programming', description: 'computer science', when: '10:10am', priority: 1},
      {id: 2, owner: 'user1', title: 'drawing', description: 'a few pencil strokes', when: '11:11am', priority: 2},
      {id: 2, owner: 'user1', title: 'drawing', description: 'a few pencil strokes', when: '11:11am', priority: 2},
      {id: 2, owner: 'user1', title: 'drawing', description: 'a few pencil strokes', when: '11:11am', priority: 2},
      {id: 2, owner: 'user1', title: 'drawing', description: 'a few pencil strokes', when: '11:11am', priority: 2},
      {id: 2, owner: 'user1', title: 'drawing', description: 'a few pencil strokes', when: '11:11am', priority: 2},
      {id: 2, owner: 'user1', title: 'drawing', description: 'a few pencil strokes', when: '11:11am', priority: 2},
      {id: 2, owner: 'user1', title: 'drawing', description: 'a few pencil strokes', when: '11:11am', priority: 2},
      {id: 2, owner: 'user1', title: 'drawing', description: 'a few pencil strokes', when: '11:11am', priority: 2},
      {id: 2, owner: 'user1', title: 'drawing', description: 'a few pencil strokes', when: '11:11am', priority: 2},
      {id: 2, owner: 'user1', title: 'drawing', description: 'a few pencil strokes', when: '11:11am', priority: 2},
      {id: 2, owner: 'user1', title: 'drawing', description: 'a few pencil strokes', when: '11:11am', priority: 2},
      {id: 3, owner: 'user1', title: 'running', description: 'moving legs fast', when: '12:12am', priority: 3},
      {id: 4, owner: 'user1', title: 'laying', description: 'putting back on something comfy', when: '13:13pm', priority: 1}
    ];

    const tasaki: Task[] = [
      {id: 10, owner: 'o10', title: 't10', description: 'd1', when: 'h1', priority: 1},
      {id: 20, owner: 'o10', title: 't20', description: 'd2', when: 'h2', priority: 2},
      {id: 30, owner: 'o10', title: 't30', description: 'd3', when: 'h3', priority: 3},
      {id: 40, owner: 'o20', title: 't10', description: 'd1', when: 'h1', priority: 1}
    ];

    return {tasks};
  }
}
