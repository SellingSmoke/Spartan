import {Component, OnInit} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { Alumno } from '../dataTypes/alumno';
import { Student } from '../dataTypes/student';
import { AlumnoDetailComponent } from '../alumnos/alumno-detail';
import { AlumnoService } from '../alumnos/alumno-service';

@Component({
	selector: 'dashboard-entrenador',
  styleUrls: ['app/inicio/inicio.css', 'app/main/app.main.css'],
  templateUrl: 'app/dashboard-entrenador/dashboard-entrenador.html',
	directives: [AlumnoDetailComponent],
  providers: [AlumnoService]
})

export class DashboardEntrenador implements OnInit {

	selectedStudent: Student;
	students: Student[];

  constructor(private _alumnoService: AlumnoService, private _router: Router) { }

	// OnInit Methods

	getStudents(){
		this._alumnoService.getStudents().then(students => this.students = students);
	}

	getStudentsGoals(){
		
	}

  ngOnInit() {
		this.getStudents();
		this.getStudentsGoals();
  }

	// Component Methods

  onSelect(student: Student) {
		this.selectedStudent = student;
	}

	goToStudentTask(student: Student) {
    this._router.navigate(['DashboardAlumno', { id: student.id }]);
  }

	getBack(back: boolean){
	 	this.selectedStudent = undefined;
	}
}
