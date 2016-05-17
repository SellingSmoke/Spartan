import {Injectable} from 'angular2/core';
import { Http, RequestOptions, Headers } from 'angular2/http';
import {Router} from 'angular2/router';
import { User } from '../models/user.model';;
import 'rxjs/Rx';

@Injectable()
export class AutenticacionService {

    static staticUser:User;

    private currentUser: User;

    constructor (private http: Http, private router:Router){}

  	public logIn(user: string, pass: string) {

  		let userPass = user + ":" + pass;

  		let headers = new Headers({
  			'Authorization': 'Basic '+utf8_to_b64(userPass),
  			'X-Requested-With': 'XMLHttpRequest'
  		});

  		let options = new RequestOptions({headers});

  		return this.http.get('logIn', options).map(
  			response => {
				  return this.processLogInResponse(response);
  			}
  		);
  	}


    private processLogInResponse(response){
      // Si ha llegado aqui, es que te has logeado correctamente
      console.log("AQUI ESTA");
      console.log(response.json());

  		this.currentUser = response.json();
      this.setUser();

      console.log("CUMPLE: "+this.currentUser.birthday);

      localStorage.setItem("login", "SPARTAN");
      if(this.currentUser.roles.indexOf("ROLE_ADMIN") !== -1){
        localStorage.setItem("rol", "ROLE_ADMIN");
      }
      if(this.currentUser.roles.indexOf("ROLE_TRAINER") !== -1){
        localStorage.setItem("rol", "ROLE_TRAINER");
      }
      if(this.currentUser.roles.indexOf("ROLE_STUDENT") !== -1){
        localStorage.setItem("rol", "ROLE_STUDENT");
      }
      return response;
  	}

    public reqIsLogged(){

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
  				}else{
            console.error("No tienes sesion activa");
          }
          this.exit();
  			}
  		);
    }

    private setUser(){
      if(!AutenticacionService.staticUser){
        AutenticacionService.staticUser = this.currentUser;
      }else{
        console.log("Ya hay usuario");
      }
    }

    public User(){
      return AutenticacionService.staticUser;
    }

    public esAlumno():boolean {
        return this.checkLS("ROLE_STUDENT");
    }

    public esProfesor():boolean {
        return this.checkLS("ROLE_TRAINER");
    }

    public isAdmin():boolean {
        return this.checkLS("ROLE_ADMIN");
    }

    public isLogIn():boolean{
        return localStorage.getItem('login') =="SPARTAN";
    }


    private checkLS(rol:String):boolean{
        return localStorage.getItem('rol') == rol && this.isLogIn();
    }

    /*
     *	Destruye la sesión en Spring
     */

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
            this.exit();
          }
        );
    }

    /*
     *	Destruye la sesión en Angular
     */

    private exit(){
      localStorage.clear();
      this.router.navigateByUrl("/");
    }


};

function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode(<any>'0x' + p1);
    }));
}
