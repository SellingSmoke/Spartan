import {Component} from 'angular2/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
@Component({
	selector: 'perfil',
    templateUrl: 'app/components/perfil/perfil.html',
		styleUrls: ['app/components/perfil/perfil.css'],
		providers: [StudentService]
})

export class Perfil {
	public student:Student;
	public cambiarPassword:string;
	public cambiarCorreoE:string;

	constructor(private _studentService: StudentService){
		this.cambiarPassword = undefined;
		this.cambiarCorreoE = undefined;
		this._studentService.getStudent(1)
			.then(student => this.student = student);
	}

	cambiarPassClick(){
		this.cambiarPassword="cambiar";
	}
	cambiarPass():boolean{
		return this.cambiarPassword!==undefined;
	}
	cambiarAlgo():boolean{
		return this.cambiarPassword!==undefined || this.cambiarCorreoE!==undefined;
	}
	guardarPass(){
		this.cambiarPassword=undefined;
	}

	cambiarCorreoClick(){
		this.cambiarCorreoE="cambiar";
	}

	cambiarCorreo():boolean{
		return this.cambiarCorreoE!==undefined;
	}

	guardarCorreo(){
		this.cambiarCorreoE=undefined;
	}
};
