import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import { User } from '../models/user.model';
import {MultipartItem} from "../multipart-upload/multipart-item";
import {MultipartUploader} from "../multipart-upload/multipart-uploader";
import 'rxjs/Rx';

const URL:string = 'users/';

@Injectable()
export class UserService {

  constructor (private http: Http){}

  /**
     Devuelve un usuario
  */

  public newUser(user: User) {

    let body = JSON.stringify(user);
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

  /**
     Devuelve todos los alumnos de un entrenador
  */

  public getStudents(id:number) {

    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });
    let url = URL + "/students/"+id
    return this.http.get(url, options)
      .map(response => this.processStudentsResponse(response.json()))
      .catch(error => this.handleError(error));
  }

  public editUser(user: User, pass?:String) {
    console.log("Se va a editar un usuario");
    let body = JSON.stringify(user);
    console.log(body);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });
    let url = URL +"editUser/";
    return this.http.put(url, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  private processStudentsResponse(students:User[]){
    return students.map(this.assignGoal);
  }

  private assignGoal(user:User):User{
    console.log("META AQUI");
    console.log(user.goals.filter(goal => goal.active)[0]);
    user.goal = user.goals.filter(goal => goal.active)[0];
    return user;
  }

  private handleError(error: any){
    console.error(error);
    return Observable.throw("Server error (" + error.status + "): " + error.text())
  }

}
