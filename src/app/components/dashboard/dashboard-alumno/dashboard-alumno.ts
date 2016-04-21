import { Component, OnInit, Input, Output, EventEmitter } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Student } from '../../../models/student';
import { Comment } from '../../../models/comment';
import { Task } from '../../../models/task';
import { Goal } from '../../../models/goal';
import { Meta } from './meta'
import { BeautifyProgessBarPipe, GoalNamePipe } from '../../../pipes/student-pipes.pipe';
import { TaskService } from '../../../services/task.service';
import { AutenticacionService } from '../../../services/autenticacion.service';

declare var jQuery:JQueryStatic;


@Component({
	selector: 'dashboard-alumno',
  templateUrl: 'app/components/dashboard/dashboard-alumno/dashboard-alumno.html',
  providers: [AutenticacionService, TaskService],
	directives:  [Meta],
  pipes: [BeautifyProgessBarPipe, GoalNamePipe],
	inputs: ['student']
})

export class DashboardAlumno implements OnInit{

	@Input()
	student: Student;

	@Output()
  trainer_dashboard_event = new EventEmitter<any>();

	tasks: Task[];

	task: Task;

	comment: Comment;

	tab: number;

	rol: number;

	constructor(private aut: AutenticacionService, private _taskService: TaskService) {}

	/*
	 *	Al iniciarse el componente, se cargaran las tareas que debe realizar el alumno
	 *  las cuales se obtienen a partir del id de su meta
   */

	ngOnInit(){
		this.tasks = [];
		this.tab = 1;
		this.task = new Task(this.student.goal.id);
		this.comment = new Comment();
		this.rol = localStorage.getItem('rol');

		if (this.student.goal){
			this._taskService.getTasks(this.student.goal.id).then(
				tasks => this.tasks = tasks
			);
		}

	}

	/*
	 *	Método que permite volver al DashboardEntrenador
   */

	goBack() {
		this.trainer_dashboard_event.emit(null);
  }

	getGoal(goal: Goal){
		this.student.goal = goal;
		this.task = new Task(this.student.goal.id);
	}


	saveComment(text: string){
		this.student.goal.comments.push(this.comment);
		this.comment = new Comment();
	}

	saveTask(mode){
		// AQUI SE LLAMARÁ A GUARDAR EN LA BDD
		if (mode){
			this.tasks.push(this.task);
		}
		this.task = new Task(this.student.goal.id);
		// Para cerrar el dialog
		this.showDialog();
	}

	setType(type: number){
		this.task.setType(type);
		jQuery(".breadcrumb").hide();
		if (type) {
			jQuery("#form-aerobico").hide();
			jQuery("#form-anaerobico").show();
    }else{
      jQuery("#form-anaerobico").hide();
      jQuery("#form-aerobico").show();
    }
	}

	showDialog() {
	    jQuery('#dialog-mat').toggleClass('position-changed');
	    jQuery('.wrap').toggleClass('active'); //Activar y desactivar el dialog
	    jQuery('#blurizable').toggleClass('blur-backgorund change-style-blur'); //Activar y desactivar el fondo oscuro tras el dialog
	    jQuery('.boton-de-radio').prop('checked', false); //Desmarcar los radio-button de añadir tarea al pulsar Aceptar o Cancelar
	    jQuery("#form-anaerobico").hide();
	    jQuery("#form-aerobico").hide();
	    jQuery(".breadcrumb").show();

	    jQuery('html, body').animate({
	        scrollTop: jQuery("#dialog-mat").offset().top - 150
	    }, 250);

	    return false;
	}

}
