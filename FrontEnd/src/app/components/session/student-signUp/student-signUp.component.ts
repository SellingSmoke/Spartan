import {Component} from 'angular2/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';

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

		constructor(private userService: UserService) {}

    registrar() {
        if (this.pass1 === this.pass2){
					console.log("HAS PULSADO SUBMIT!!!!");
					console.log(this.toJSON());

            // var aux= JSON.parse(localStorage.getItem('usuarios'));
            // aux.push({user:this.model.user,pass:this.model.pass1,rol:"2"});
            // localStorage.removeItem('usuarios');
            // localStorage.setItem('usuarios', JSON.stringify(aux));

						this.userService.newUser(this.toJSON());

        }
    }

		toJSON(): User {
			return {
				trainerId: 1,
				name: this.name,
				lastname: this.lastname,
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
