import { Component, OnInit, Output, EventEmitter } from 'angular2/core';
import { Router, Route, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { StudentDetailComponent } from '../../../directives/studentDetail/student-detail';
import { User } from '../../../models/user.model';
import { Comment } from '../../../models/comment.model';
import { Task, newTask, setType } from '../../../models/task.model';
import { UserService } from '../../../services/user.service';
import { AutenticacionService } from '../../../services/autenticacion.service';
import { Goal } from '../../../models/goal.model';

@Component({
	selector: 'dashboard-entrenador',
  styleUrls: ['app/components/dashboard/trainer-dashboard/trainer-dashboard.css'],
  templateUrl: 'app/components/dashboard/trainer-dashboard/trainer-dashboard.html',
	providers: [UserService, AutenticacionService],
	directives: [StudentDetailComponent],
})

export class DashboardEntrenador implements OnInit{

	@Output()
  student_dashboard_event = new EventEmitter<User>();

	selectedStudent: User;
	students: User[];
	images:string[];

  constructor(private _router: Router, private userService:UserService,private aut: AutenticacionService) {
		this.students =[];
	}

	/**
		Método marca como seleccionado a un alumno, mostrando sus detalles
	*/

  onSelect(student: User) {
		this.selectedStudent = student;
	}

	/**
		Método que permite cargar el dashboard del alumno seleccionado
	*/

	goToStudentTask(student: User) {
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
		this.userService.getStudents(this.aut.User().id).subscribe(
			response => {console.log(response), this.students = response},
			error => console.log(error)
		)
  }
}


var IMAGES = ["http://semantic-ui.com/images/avatar/large/steve.jpg",
	           "http://semantic-ui.com/images/avatar2/large/matthew.png",
	           "http://semantic-ui.com/images/avatar/large/daniel.jpg",
	           "http://semantic-ui.com/images/avatar/large/elliot.jpg",
	           "http://semantic-ui.com/images/avatar/large/jenny.jpg",
	           "http://semantic-ui.com/images/avatar/large/stevie.jpg",
						 "http://semantic-ui.com/images/avatar/large/helen.jpg"];
