import { Comment } from '../models/comment.model';
import { Injectable } from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

const URL:string = "comment/";
 @Injectable()
 export class CommentService {

  constructor (private http: Http){}

  /**
   *  COMMENT POST
   */

  public newComment(comment: Comment, goal_id:number) {
    console.log("Se va a enviar comentario");
    let body = JSON.stringify(comment);
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

  private handleError(error: any){
    console.error(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text())
  }

 }
