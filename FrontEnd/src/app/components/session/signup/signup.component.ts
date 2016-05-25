import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from "angular2/router";
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';
import { AutenticacionService } from '../../,,/../../services/autenticacion.service';
import { Alert } from '../../../directives/alert/alert';

@Component({
	selector: 'registro',
  templateUrl: 'app/components/session/signup/signup.html',
	providers: [UserService],
	directives: [Alert]
})

export class Signup implements OnInit{

		private rolRegistro: boolean; //true: student; false: trainer
		private rolString: string;
		mainTitleAlert: string;
		messageAlert: string;

		name:string;
		lastname: string;
		email: string;
		gender: string = "Hombre";
		birthday: number;
		pass1:string;
		pass2:string;

		trainer_id:number = -1;

		private passMatching:boolean = true;

		ngOnInit(){
			this.rolRegistro = this._routeParams.get('role') == 'student';
			if (this.rolRegistro){
				this.rolString = 'ROLE_STUDENT';
			} else {
				this.rolString = 'ROLE_TRAINER';
			}
		}

		constructor(public router: Router, private userService: UserService, private autenticacionService: AutenticacionService, private _routeParams: RouteParams) {
			this.mainTitleAlert = "";
			this.messageAlert = "";
		}

    public registrar() {
        if (this.pass1 === this.pass2){
					this.userService.newUser(this.toJSON()).subscribe(
						user => { console.log("¡Te has loggeado con exito "+user.name+"!");
											this.logIn();
										},
						error => {  this.mainTitleAlert = "¡Nombre de usuario ya en uso!";
										  	this.messageAlert = "Elija otro nombre";
										  	this.passMatching = false; }
					)
        }else{
					this.mainTitleAlert = "¡Las contraseñas no coinciden!";
					this.messageAlert = "Revise los dos campos";
					this.passMatching = false;
					console.log("Las contraseñas no coinciden");
				}
    }

		private logIn(){
			this.autenticacionService.logIn(this.name, this.pass1).subscribe(
				user => this.router.parent.navigateByUrl('/dashboard')
			);
		}

		private toJSON(): User {
			let img = this.gender == "Hombre" ? "/../assets/imagenes/male_default.png" : "/../assets/imagenes/female_default.jpg";
			return {
				trainerId: this.trainer_id,
				name: this.name,
				lastname: this.lastname,
				passwordHash: this.pass1,
				roles: [this.rolString, "ROLE_USER"],
				email: this.email,
				gender: this.gender,
				birthday: 1360006343670,
				registrationDate: Date.now(),
				goals: [],
				imageUrl:img
			}
		}

};
