import {Component} from 'angular2/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';
@Component({
	selector: 'profile',
    templateUrl: 'app/components/profile/profile.html',
		styleUrls: ['app/components/profile/profile.css'],
		providers: [StudentService]
})

export class Profile {
	public student:Student;
	public editMode:number; // 0 nada - 1 mail - 2 pass  - 3 registro histórico de metas

	constructor(private _studentService: StudentService){
		this.editMode = 0;
		this._studentService.getStudent(1)
			.then(student => this.student = student);
	}

	editPass(){
		this.editMode = 2;
	}

	editMail(){
		this.editMode = 1;
	}

	showGoals(){
		this.editMode = 3;
	}

	saveChanges(save:boolean){
		if(save){
			// Guardar los cambios en la base de datos
			// Hacer PUT con este estudiante
		}
		this.editMode = 0;
	}

};
