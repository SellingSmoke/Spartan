import {Component} from 'angular2/core';
import {Router} from "angular2/router";
import {RouterLink} from "angular2/router";
import { AutenticacionService } from '../../,,/../../services/autenticacion.service';
import { Alert } from '../../../directives/alert/alert';

@Component({
	selector: 'login',
    templateUrl: 'app/components/session/login/login.html',
		styleUrls: ['app/components/session/login/login.css'],
    directives: [RouterLink, Alert]

})


export class Login {

		private fieldsIncorrect: boolean;

    constructor(public router: Router,private autenticacionService: AutenticacionService) {
			this.fieldsIncorrect = false;
		}


    logIn(user: string, pass: string){

			this.autenticacionService.logIn(user, pass).subscribe(
				response => this.router.parent.navigateByUrl('/dashboard'),
				error => this.fieldsIncorrect = true
			);
    }

};
