import { Component, OnInit, Input, Output, EventEmitter } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Student } from '../../../models/student';
import { Comment } from '../../../models/comment';
import { Task } from '../../../models/task';
import { Goal } from '../../../models/goal';
import { GoalForm } from '../../../directives/goalForm/goal-form'
import { CommentDirective } from '../../../directives/comments/comment.directive'
import { BeautifyProgessBarPipe, GoalNamePipe } from '../../../pipes/student-pipes.pipe';
import { TaskService } from '../../../services/task.service';
import { AutenticacionService } from '../../../services/autenticacion.service';

declare var jQuery:JQueryStatic;


@Component({
	selector: 'dashboard-alumno',
  templateUrl: 'app/components/dashboard/dashboard-alumno/dashboard-alumno.html',
  providers: [AutenticacionService, TaskService],
	directives:  [GoalForm, CommentDirective],
  pipes: [BeautifyProgessBarPipe, GoalNamePipe],
	inputs: ['student']
})

export class DashboardAlumno implements OnInit{

	@Input()
	student: Student;

	@Output()
  trainer_dashboard_event = new EventEmitter<any>();

	tasks: Task[];		  // Lista de tareas del usuario

	tab: number;				// Tab actual

	task: Task;					// Modelo de la nueva meta para el formulario

	constructor(private aut: AutenticacionService, private _taskService: TaskService) {}

	/*
	 *	Al iniciarse el componente, se cargaran las tareas que debe realizar el alumno
	 *  las cuales se obtienen a partir del id de su meta
   */

	ngOnInit(){
		this.tasks = [];
		this.tab = 1;
		if (this.student.goal){
			this._taskService.getTasks(this.student.goal.id).then(
				tasks => this.tasks = tasks
			);
			this.task = new Task(this.student.goal.id);
		}
	}

	/*
	 *	Método que permite volver al DashboardEntrenador
   */

	goBack() {
		this.trainer_dashboard_event.emit(null);
  }

	newGoal(){
		this.student.goal = null;
	}

	getGoal(goal: Goal){
		this.student.goal = goal;
		this.task = new Task(this.student.goal.id);
	}

	goalResponse(acepted:boolean){
		this.student.goal.acepted = acepted;
		this.student.goal.canceled = !acepted;
		// LLAMAR A GUARDAR
		if(this.aut.esProfesor() && !acepted){
			this.newGoal();
			this.goBack();
		}
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
