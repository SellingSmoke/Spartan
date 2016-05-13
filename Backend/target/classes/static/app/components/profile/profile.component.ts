import {Component, OnInit} from 'angular2/core';
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

export class Profile implements OnInit{
	public student:Student;
	public editMode:number; // 0 nada - 1 mail - 2 pass  - 3 registro histórico de metas
	public goals:Goal[];

	completeGoals:Goal[];
	canceledGoals:Goal[];

	numComplete:number;
	numCancelled:number;
	numDiets:number;
	numComments:number;
	numTasks:number;
	num:number;
	progress:number;

	constructor(private _studentService: StudentService, private _goalService: GoalService){
		this.progress = 0;
		this.num = 0;
		this.numComplete = 0;
		this.numCancelled = 0;
		this.numDiets = 0;
		this.numComments = 0;
		this.editMode = 0;
		this.numTasks = 0;
		this.completeGoals = [];
		this.canceledGoals = [];
	}

	ngOnInit(){
		this._studentService.getStudent(1)
			.then(student => {
				this.student = student;
				this.numComments += student.goal.comments.length;
				if(student.goal){
					 this.progress+= student.goal.progress;
					 if(student.goal.diet) this.numDiets += 1;
				}
			});
		this._goalService.getGoals(1)
			.then(goals => {
				this.filterGoals(goals);
			});
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

	filterGoals(goals:Goal[]){
		for (var g of goals){
			if (g.progress === 100){
				this.completeGoals.push(g);
				this.numComplete++;
			}
			if (g.canceled){
				this.canceledGoals.push(g);
				this.numCancelled++;
			}
			this.numTasks += g.tasks.length;
			this.num += 1;
			if(g.diet) this.numDiets += 1;
			this.numComments += g.comments.length;
			this.progress+= g.progress;
		}
	}


};
