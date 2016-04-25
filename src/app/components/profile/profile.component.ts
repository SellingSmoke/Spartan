import {Component} from 'angular2/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';
import { GoalService } from '../../services/goal.service';
import {Goal} from '../../models/goal.model';
import { GoalNamePipe } from '../../pipes/student-pipes.pipe';

@Component({
	selector: 'profile',
    templateUrl: 'app/components/profile/profile.html',
		styleUrls: ['app/components/profile/profile.css'],
		pipes: [GoalNamePipe],
		providers: [StudentService, GoalService]
})

export class Profile {
	public student:Student;
	public editMode:number; // 0 nada - 1 mail - 2 pass  - 3 registro histórico de metas
	public goals:Goal[];

	constructor(private _studentService: StudentService, private _goalService: GoalService){
		this.editMode = 0;
		this._studentService.getStudent(1)
			.then(student => this.student = student);
		this._goalService.getGoals(1)
			.then(goals => this.goals = goals);
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

	getCompletedGoals (){
		var completed =  [];
		for (var g of this.goals){
			if (g.progress === 100){
				completed.push(g);
			}
		}
		return completed;
	}

	getCancelledGoals (){
		var cancelled =  [];
		for (var c of this.goals){
			if (c.canceled){
				cancelled.push(c);
			}
		}
		return cancelled;
	}

};
