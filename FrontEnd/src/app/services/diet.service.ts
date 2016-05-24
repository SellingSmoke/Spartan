import { Diet } from '../models/diet.model';
import { Injectable } from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

const URL:string = "diet/";
 @Injectable()
 export class DietService {

  constructor (private http: Http){}

  /**
   *  DIET POST
   */

  public newDiet(diet:Diet, goalId:number) {
    console.log("Se va a enviar meta");
    let body = JSON.stringify(diet);
    let headers = new Headers({
        'Content-Type': 'application/json',
       'X-Requested-With': 'XMLHttpRequest'
   });
    let options = new RequestOptions({ headers });
    let url = URL + "goal/"+goalId;
    return this.http.post(url, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  /**
   *  DIET PUT
   */

  public editDiet(diet: Diet) {
    console.log("Se va a editar meta");
    console.log(diet);
    let body = JSON.stringify(diet);
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

  private handleError(error: any){
    console.error(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text())
  }

 }
