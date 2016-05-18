import {Component} from 'angular2/core';
import {Router} from "angular2/router";
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';
import { AutenticacionService } from '../../,,/../../services/autenticacion.service';

@Component({
	selector: 'registroAlumno',
  templateUrl: 'app/components/session/student-signUp/student-signUp.html',
	providers: [UserService]
})

export class StudentSignUp {

		name:string;
		lastname: string;
		email: string;
		gender: number;
		birthday: number;
		pass1:string;
		pass2:string;

		constructor(public router: Router,private userService: UserService,private autenticacionService: AutenticacionService) {}

    public registrar() {
        if (this.pass1 === this.pass2){
					this.userService.newUser(this.toJSON()).subscribe(
						user => { console.log("¡Te has logeado con exito "+user.name+"!");
											this.logIn();
										}
					)
        }else{
					console.log("Las contaseñas no coinciden");
				}
    }

		private logIn(){
			this.autenticacionService.logIn(this.name, this.pass1).subscribe(
				user => this.router.parent.navigateByUrl('/dashboard')
			);
		}

		private toJSON(): User {
			return {
				trainerId: 1,
				name: this.name,
				lastname: this.lastname,
				passwordHash: this.pass1,
				roles: ["ROLE_STUDENT"],
				email: this.email,
				gender: this.gender,
				birthday: 1360006343670,
				registrationDate: Date.now(),
				goals: [],
				img_url:""
			}
		}

};
