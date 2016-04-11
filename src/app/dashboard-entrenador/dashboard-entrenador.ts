import { Component, OnInit } from 'angular2/core';
import { Router, Route, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { Student } from '../students/student';
import { Goal } from '../dataTypes/goal';
import { StudentDetailComponent } from '../students/student-detail';
import { StudentService } from '../students/student-service';

@Component({
	selector: 'dashboard-entrenador',
  styleUrls: ['app/inicio/inicio.css', 'app/main/app.main.css'],
  templateUrl: 'app/dashboard-entrenador/dashboard-entrenador.html',
	directives: [StudentDetailComponent],
  providers: [StudentService]
})

export class DashboardEntrenador implements OnInit{

	selectedStudent: Student;
	students: Student[];

  constructor(private _studentService: StudentService, private _router: Router) { }

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

	// OnInit METHODS -> Por refactorizar


	/**
		Método que se llama inmediatamente después del OnInit
	*/

  ngOnInit() {
		this.students = new Array<Student>();
		this.getStudents();
  }

	/**
		Método que pedirá los alumnos y al recibirlos los pasará al método para obtener sus metas
	*/

	getStudents(){
		this._studentService.getStudents().then(
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
			this._studentService.getStudentGoal(student.id).then(
				goal => {
					if(goal != null){
						var student = students.filter(alumno => alumno.id === goal.id)[0];
						student.goal = goal;
					}
				});
		 }
	}
}
