import {Component, OnInit, Input, Output, EventEmitter } from 'angular2/core';
import {RouteParams} from 'angular2/router';
import { StudentService } from '../students/student-service';
import { Student } from '../students/student';
import { BeautifyProgessBarPipe, GoalNamePipe } from '../students/student-pipes.pipe';

import { Autenticacion } from '../autenticacion/autenticacion';


@Component({
	selector: 'dashboard-alumno',
  styleUrls: ['app/inicio/inicio.css'],
  templateUrl: 'app/dashboard-alumno/dashboard-alumno.html',
  providers: [Autenticacion, StudentService],
  pipes: [BeautifyProgessBarPipe, GoalNamePipe],
	inputs: ['student']
})

export class DashboardAlumno{

	@Input()
	student: Student;

	@Output()
  trainer_dashboard_event = new EventEmitter<any>();

	constructor(private aut: Autenticacion, private _studentService: StudentService) {

	 }

	/*
	 *	Método que permite volver al DashboardEntrenador
   */

	goBack() {
		this.trainer_dashboard_event.emit(null);
  }

}
