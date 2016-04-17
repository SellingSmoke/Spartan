import {Component, OnInit, Input, Output, EventEmitter } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Student } from '../students/student';
import { Task } from '../dataTypes/task';
import { BeautifyProgessBarPipe, GoalNamePipe } from '../students/student-pipes.pipe';
import { TaskService } from '../services/task-service';
import { Autenticacion } from '../autenticacion/autenticacion';


@Component({
	selector: 'dashboard-alumno',
  styleUrls: ['app/inicio/inicio.css'],
  templateUrl: 'app/dashboard-alumno/dashboard-alumno.html',
  providers: [Autenticacion, TaskService],
  pipes: [BeautifyProgessBarPipe, GoalNamePipe],
	inputs: ['student']
})

export class DashboardAlumno implements OnInit{

	@Input()
	student: Student;

	@Output()
  trainer_dashboard_event = new EventEmitter<any>();

	tasks: Task[];

	t = {
		nombre: "",
		descripcion: "",
		objetivo1: "",
		objetivo2: ""
	}

	constructor(private aut: Autenticacion, private _taskService: TaskService) {}

	/*
	 *	Al iniciarse el componente, se cargaran las tareas que debe realizar el alumno
	 *  las cuales se obtienen a partir del id de su meta
   */

	ngOnInit(){
		this._taskService.getTasks(this.student.goal.id).then(
			tasks => this.tasks = tasks
		);
	}

	/*
	 *	Método que permite volver al DashboardEntrenador
   */

	goBack() {
		this.trainer_dashboard_event.emit(null);
  }

	completeTask(task){
		task.completed = true;
	}

}
