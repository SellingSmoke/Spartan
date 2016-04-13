import { TASKS } from '../recursos-estaticos';
import { Task } from '../dataTypes/task';
import { Injectable } from 'angular2/core';

@Injectable()
export class TaskService {

  /**
     Devuelve las tareas de una meta de un alumno
  */

  getTasks(id: number) {
    let tasks = Promise.resolve(TASKS).then(
      tasks => tasks.filter(task => task.goal_id === id)
    );
    return tasks;
  }

}
