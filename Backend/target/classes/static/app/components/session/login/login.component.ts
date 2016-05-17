import {Component} from 'angular2/core';
import {Router} from "angular2/router";
import {RouterLink} from "angular2/router";
import { AutenticacionService } from '../../,,/../../services/autenticacion.service';

@Component({
	selector: 'login',
    templateUrl: 'app/components/session/login/login.html',
		styleUrls: ['app/components/session/login/login.css'],
    directives: [RouterLink]

})


export class Login {

    constructor(public router: Router,private autenticacionService: AutenticacionService) {}


    logIn(event: any, user: string, pass: string){

			event.preventDefault();

			this.autenticacionService.logIn(user, pass).subscribe(
				user => this.router.parent.navigateByUrl('/dashboard')
			);

			// this.autenticacionService.logIn(user, pass) // borrar en un futuro


        // if (!localStorage.getItem('usuarios')){
        //     var aux=[];
        //     aux.push({user:"admin",pass:"admin",rol:"0"});
        //     aux.push({user:"spartan",pass:"spartan",rol:"1"});
        //     aux.push({user:"alumno",pass:"alumno",rol:"2"});
        //     localStorage.setItem('usuarios', JSON.stringify(aux));
        // }
				//
        // this.usuarios = JSON.parse(localStorage.getItem('usuarios'));
				//
        // for (var i = 0 ; i<this.usuarios.length ; i++){
        //     if (this.usuarios[i].user===this.model.user && this.usuarios[i].user != ""){
        //         if (this.usuarios[i].pass===this.model.pass){
        //             localStorage.setItem('spartan', "Somos Espartanos");
        //             localStorage.setItem('rol', this.usuarios[i].rol);
        //             this.router.parent.navigateByUrl('/dashboard');
        //         }
        //     }
        // }

    }

};
