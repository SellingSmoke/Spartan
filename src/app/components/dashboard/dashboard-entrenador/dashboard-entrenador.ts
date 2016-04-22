import { Component, OnInit, Output, EventEmitter } from 'angular2/core';
import { Router, Route, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { Goal } from '../../../models/goal';
import { StudentDetailComponent } from './student-detail';
import { StudentService } from '../../../services/student.service';
import { Student } from '../../../models/student';

@Component({
	selector: 'dashboard-entrenador',
  styleUrls: ['app/components/dashboard/dashboard-entrenador/dashboard-entrenador.css'],
  templateUrl: 'app/components/dashboard/dashboard-entrenador/dashboard-entrenador.html',
	directives: [StudentDetailComponent],
  providers: [StudentService]
})

export class DashboardEntrenador implements OnInit{



	@Output()
  student_dashboard_event = new EventEmitter<Student>();

	selectedStudent: Student;
	students: Student[];
	images:string[];

  constructor(private _studentService: StudentService, private _router: Router) { }

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
		this.student_dashboard_event.emit(student);
  }

	/**
		Método que permite dar la vuelta a la tarjeta
	*/

	getBack(back: boolean){
	 	this.selectedStudent = undefined;
	}

	/**
		Método que se llama inmediatamente después del OnInit
	*/

  ngOnInit() {
		this.images = IMAGES;
		this._studentService.getStudents().then(
			students => {
				this.students = students;
			}
		);
  }
}


var IMAGES = ["http://semantic-ui.com/images/avatar/large/steve.jpg",
	           "http://semantic-ui.com/images/avatar2/large/matthew.png",
	           "http://semantic-ui.com/images/avatar/large/daniel.jpg",
	           "http://semantic-ui.com/images/avatar/large/elliot.jpg",
	           "http://semantic-ui.com/images/avatar/large/jenny.jpg",
	           "http://semantic-ui.com/images/avatar/large/stevie.jpg",
						 "http://semantic-ui.com/images/avatar/large/helen.jpg"];
