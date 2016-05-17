import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import { User } from '../models/user.model';
import 'rxjs/Rx';

const URL = 'books/';

@Injectable()
export class UserService {

  constructor (private http: Http){}

  /**
     Devuelve todos los alumnos
  */

  public newUser(user: User) {

    let body = JSON.stringify(user);
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
