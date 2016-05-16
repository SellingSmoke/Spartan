import {Injectable} from 'angular2/core';
import { Http, RequestOptions, Headers } from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class AutenticacionService {

    // New Variables
    user: User;

    constructor (private http: Http){}

  	req_isLogged(){
  		let headers = new Headers({
  			'X-Requested-With': 'XMLHttpRequest'
  		});

  		let options = new RequestOptions({headers});

  		this.http.get('logIn', options).subscribe(
  			response => this.processLogInResponse(response),
  			error => {
  				if(error.status != 401){
  					console.error("Error when asking if logged: "+
  						JSON.stringify(error));
  				}
  			}
  		);
    }

    private processLogInResponse(response){
      console.log(response);
  		// localStorage.setItem("login", "SPARTAN"); // ERROR: Machea si existe una pagina la cual si existe
  		this.user = response.json();
      if(this.user.roles.indexOf("ROLE_ADMIN") !== -1){
        localStorage.setItem("rol", "ADMIN");
        localStorage.setItem("login", "SPARTAN"); // BORRAR EN UN FUTURO
      }
      if(this.user.roles.indexOf("ROLE_USER") !== -1){
        localStorage.setItem("rol", "USER");
        localStorage.setItem("login", "SPARTAN"); // BORRAR EN UN FUTURO
      }
      if(this.user.roles.indexOf("ROLE_STUDENT") !== -1){
        localStorage.setItem("rol", "STUDENT");
        localStorage.setItem("login", "SPARTAN"); // BORRAR EN UN FUTURO
      }
  	}

  	logIn(user: string, pass: string) {

      console.log("LOGIN");


      if(user == "DEV"){
        this.modoDesarrollo();
      }

  		let userPass = user + ":" + pass;

  		let headers = new Headers({
  			'Authorization': 'Basic '+utf8_to_b64(userPass),
  			'X-Requested-With': 'XMLHttpRequest'
  		});

  		let options = new RequestOptions({headers});

  		return this.http.get('logIn', options).map(
  			response => {
  				this.processLogInResponse(response);
  				return this.user;
  			}
  		);

  	}

    public esAlumno():boolean {
        return this.isLogIn() && this.checkLS("STUDENT");
    }

    public esProfesor():boolean {
        return this.isLogIn() && this.checkLS("USER");
    }

    public isAdmin():boolean {
        return this.isLogIn() && this.checkLS("ADMIN");
    }

    public isLogIn():boolean{
        console.log("Login:"+localStorage.getItem('login'))
        return localStorage.getItem('login') =="SPARTAN";
    }

    public logOut(){
        localStorage.clear();
        console.log("LOGOUT LLAMADO");
        return this.http.get('logOut').map(
    			response => {
            console.log("LOGOUT LLEGO");
    				return response;
  			  },
          error => {
            console.log("LOGOUT NO LLEGO");
          }
		    );
    }

    private checkLS(rol:String):boolean{
        return localStorage.getItem('rol') == rol;
    }

    // BORRAR EN UN FUTURO
    private modoDesarrollo(){
        localStorage.setItem("rol", "USER");
        localStorage.setItem("login", "SPARTAN");
    }

};

export interface User {
    id?: number;
    name: string;
    roles: string[];
}

function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode(<any>'0x' + p1);
    }));
}
