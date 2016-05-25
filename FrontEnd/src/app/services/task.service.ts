import { Task } from '../models/task.model';
import { Injectable } from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

const URL:string = "tasks/";

@Injectable()
export class TaskService {

  constructor (private http: Http){}

  /**
   *  TASK POST
   */

  public newTask(task: Task, goal_id:number) {
    console.log("Se va a enviar tarea");
    let body = JSON.stringify(task);
    let headers = new Headers({
        'Content-Type': 'application/json',
       'X-Requested-With': 'XMLHttpRequest'
   });
    let options = new RequestOptions({ headers });
    let url = URL + "goal/"+goal_id;
    return this.http.post(url, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  /**
   *  TASK PUT
   */

  public editTask(task: Task) {
    console.log("Se va a editar tarea");
    let body = JSON.stringify(task);
    let headers = new Headers({
        'Content-Type': 'application/json',
       'X-Requested-With': 'XMLHttpRequest'
     });
    let options = new RequestOptions({ headers });
    let url = URL + "edit"
    return this.http.put(url, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  /**
   *  TASK DELETE
   */

  public deleteTask(task: Task) {
    console.log("Se va a borrar una tarea");
    let headers = new Headers({
        'Content-Type': 'application/json',
       'X-Requested-With': 'XMLHttpRequest'
     });
    let options = new RequestOptions({ headers });

    let url = URL + task.id;

    return this.http.delete(url, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  private handleError(error: any){
    console.error(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text())
  }

}
