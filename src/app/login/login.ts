import {Component} from 'angular2/core';
import {Autenticacion} from "../autenticacion/autenticacion";

@Component({
	selector: 'login',
    templateUrl: 'app/login/login.html',
    providers: [Autenticacion],
})

export class Login {

    constructor(private autenticacion:Autenticacion){}


    logIn(user:string,password:string){
        this.autenticacion.login(user, password);
    }

};
