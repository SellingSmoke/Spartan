import { TASKS } from '../recursos-estaticos';
import { Task, parseArray } from '../models/task';
import { Injectable } from 'angular2/core';

@Injectable()
export class TaskService {

  /**
     Devuelve las tareas de una meta de un alumno
  */

  getTasks(id: number) {
    let tasks= Promise.resolve(TASKS).then(
      jTasks => {
        jTasks = jTasks.filter(task => task.goal_id === id);
        return parseArray(jTasks);
      }
    );
    return tasks;
  }

}
