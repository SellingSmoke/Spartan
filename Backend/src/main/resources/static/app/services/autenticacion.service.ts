import {Injectable} from 'angular2/core';
import { Http, RequestOptions, Headers } from 'angular2/http';
import {Router} from 'angular2/router';
import 'rxjs/Rx';

@Injectable()
export class AutenticacionService {

    // New Variables
    user: User;

    constructor (private http: Http, private router:Router){
      //this.reqIsLogged();
    }

  	reqIsLogged(){

      console.log("AUT")

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
      if(this.user.roles.indexOf("ROLE_TRAINER") !== -1){
        localStorage.setItem("rol", "TRAINER");
        localStorage.setItem("login", "SPARTAN"); // BORRAR EN UN FUTURO
      }
      if(this.user.roles.indexOf("ROLE_STUDENT") !== -1){
        localStorage.setItem("rol", "STUDENT");
        localStorage.setItem("login", "SPARTAN"); // BORRAR EN UN FUTURO
      }
      return response;
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
				  return this.processLogInResponse(response);;
  			}
  		);

  	}

    public esAlumno():boolean {
        return this.checkLS("STUDENT");
    }

    public esProfesor():boolean {
        return this.checkLS("TRAINER");
    }

    public isAdmin():boolean {
        return this.checkLS("ADMIN");
    }

    public isLogIn():boolean{
        return localStorage.getItem('login') =="SPARTAN";
    }

    public logOut(){
        console.log("LOGOUT LLAMADO");
        this.http.get('logOut').map(
    			response => {
            return response;
  			  }
		    ).subscribe(
          response => {
            console.log("LOGOUT LLEGO");
            console.log(response);
            localStorage.clear();
            this.router.navigateByUrl("/");
          }
        );
    }

    private checkLS(rol:String):boolean{
        return localStorage.getItem('rol') == rol && this.isLogIn();
    }

    // BORRAR EN UN FUTURO
    private modoDesarrollo(){
        localStorage.setItem("rol", "TRAINER");
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
