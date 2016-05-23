import { Goal } from '../models/goal2.model';
import { Injectable } from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

const URL:string = "/goals";
 @Injectable()
 export class GoalService {

  constructor (private http: Http){}

  public newGoal(goal: Goal) {

    let body = JSON.stringify(goal);
    console.log(body);
    let headers = new Headers({
        'Content-Type': 'application/json',
       'X-Requested-With': 'XMLHttpRequest'
   });
    let options = new RequestOptions({ headers });

    return this.http.post(URL, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  private handleError(error: any){
    console.error(error);
   return Observable.throw("Server error (" + error.status + "): " + error.text())
  }

 }
