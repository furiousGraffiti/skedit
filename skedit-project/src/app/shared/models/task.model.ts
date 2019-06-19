import { TaskTime } from './taskTime.model';

export class Task {
  id: number;
  owner: string;
  title: string;
  description: string;
  whenStarts: TaskTime;
  duration: TaskTime;
  priority: number;
}
