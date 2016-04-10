import {Component, OnInit, AfterContentInit} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { Alumno } from '../dataTypes/alumno';
import { Student } from '../dataTypes/student';
import { Goal } from '../dataTypes/goal';
import { AlumnoDetailComponent } from '../alumnos/alumno-detail';
import { AlumnoService } from '../alumnos/alumno-service';

@Component({
	selector: 'dashboard-entrenador',
  styleUrls: ['app/inicio/inicio.css', 'app/main/app.main.css'],
  templateUrl: 'app/dashboard-entrenador/dashboard-entrenador.html',
	directives: [AlumnoDetailComponent],
  providers: [AlumnoService]
})

export class DashboardEntrenador implements OnInit{

	selectedStudent: Student;
	students: Student[];

  constructor(private _alumnoService: AlumnoService, private _router: Router) { }

	// OnInit METHODS -> Por refactorizar

	/**
		Método que pedirá los alumnos y al recibirlos los pasará al método para obtener sus metas
	*/

	getStudents(){
		this._alumnoService.getStudents().then(
			students => this.getStudentsGoals(students)
		);
	}

	/**
		Método que para cada alumno lo insertará en la lista de alumnos.
		Para cada alumno se buscará su meta.
		Si extiste la meta, se asignara la meta al alumno.
	*/

	getStudentsGoals(students: Student[]){
		for (var student of students) {
			this.students.push(student);
			this._alumnoService.getGoal(student.id).then(
				goal => {
					if(goal != null){
						var student = students.filter(alumno => alumno.id === goal.id)[0];
						student.goal = goal;
					}
				});
		 }
	}

	/**
		Método que se llama inmediatamente después del OnInit
	*/

  ngOnInit() {
		this.students = new Array<Student>();
		this.getStudents();
  }

	// COMPONENT METHODS

	/**
		Método marca como seleccionado a un alumno, mostrando sus detalles
	*/

  onSelect(student: Student) {
		this.selectedStudent = student;
	}

	/**
		Método que permite cargar el dashboard del alumno seleccionado
	*/

	goToStudentTask(student: Student) {
    this._router.navigate(['DashboardAlumno', { id: student.id }]);
  }

	/**
		Método que permite dar la vuelta a la tarjeta
	*/

	getBack(back: boolean){
	 	this.selectedStudent = undefined;
	}
}
