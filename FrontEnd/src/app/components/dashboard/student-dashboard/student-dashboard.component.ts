import { Component, OnInit, Input, Output, EventEmitter } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { User } from '../../../models/user.model';

import { Comment } from '../../../models/comment.model';
import { Task, newTask, setType } from '../../../models/task.model';
import { Goal } from '../../../models/goal.model';

import { GoalForm } from '../../../directives/goalForm/goal-form'
import { Diets } from '../../../directives/diets/diets'
import { CommentDirective } from '../../../directives/comments/comment.directive'

import { BeautifyProgessBarPipe, GoalNamePipe } from '../../../pipes/student-pipes.pipe';
import { AutenticacionService } from '../../../services/autenticacion.service';
import { GoalService } from '../../../services/goal.service';
import { TaskService } from '../../../services/task.service';

declare var jQuery:JQueryStatic

@Component({
	selector: 'dashboard-alumno',
  templateUrl: 'app/components/dashboard/student-dashboard/student-dashboard.html',
	styleUrls: ['app/components/dashboard/student-dashboard/student-dashboard.css'],
  providers: [AutenticacionService, GoalService,TaskService],
	directives:  [GoalForm, CommentDirective, Diets],
  pipes: [BeautifyProgessBarPipe, GoalNamePipe],
	inputs: ['student']
})

export class DashboardAlumno implements OnInit{

	@Input()
	student: User;

	@Output()
  trainer_dashboard_event = new EventEmitter<any>();

	tab: number;				// Tab actual

	task: Task;					// Modelo de la nueva meta para el formulario

	taskFormType: number; // 0: no type ; 1 : aerobic ; 2 : anaerobic

	//DECLARACION DE VARIABLES PARA QUITAR jQuery

	posChanged:boolean;


	constructor(private aut: AutenticacionService,
								private goalService: GoalService, private taskService: TaskService) {
		this.tab = 1;
		this.posChanged = false; //Por si acaso, como no se donde se inicializa realmente
	}

	/*
	 *	Al iniciarse el componente, se cargaran las tareas que debe realizar el alumno
	 *  las cuales se obtienen a partir del id de su meta
   */

	ngOnInit(){
		this.task = newTask();
		this.posChanged = false;
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

	/**
	 *	Recoge la meta del formulario
   */

	getGoal(goal: Goal){
		console.log("Metra creada: "+goal.id)
		this.student.goal = goal;
	}

	goalResponse(acepted: boolean){
		this.student.goal.acepted = acepted;
		this.student.goal.canceled = !acepted;
		this.goalService.editGoal(this.student.goal).subscribe(
			response => {
				if(this.aut.esProfesor() && !acepted){
					this.newGoal(); // Poner la meta del alumno a null
					this.goBack();  // Vuelve al DashboardEntrenador
				}
			},
			error => console.log(error)
		)
	}

	saveTask(mode: boolean){
		if (mode){
			this.student.goal.tasks.push(this.task);
		  this.taskService.newTask(this.task, this.student.goal.id).subscribe(
				respose => {console.log("Tarea añadida!"); this.student.goal.tasks.push(this.task);},
				error => console.log(error)
			);
		}
		this.task = newTask();
		// Para cerrar el dialog
		this.showDialog();
	}

	setType(type: number){
		this.task = setType(type, this.task);
		jQuery(".breadcrumb").hide();
		if (type) {
			jQuery("#form-aerobico").hide();
			jQuery("#form-anaerobico").show();
    }else{
      jQuery("#form-anaerobico").hide();
      jQuery("#form-aerobico").show();
    }
	}

	setTab(n: number){
		switch(n){
			case 1:	this.tab = 1;
							break;
			case 2: this.tab = 2;
							// Pone los comentarios de tu contraparte a leidos
							for (var comment of this.student.goal.comments){
								if(comment.rol != this.aut.User().roles[0] && !comment.read)
									comment.read = true;
							}
							//Llamar a guardar en la BDD (POST COMMENT)
							break;
			case 3: this.tab = 3;
							break;
		}
	}

	getNoReadComments(){
		var n = 0;
		for (var comment of this.student.goal.comments){
			if (!comment.read){
				if(comment.rol == "ROLE_STUDENT" && this.aut.esProfesor()){
					n++
				}else if(comment.rol == "ROLE_TRAINER" && this.aut.esAlumno()){
					n++
				}
			}
		}
		return n;
	}

	showDialog() {
	    //jQuery('#dialog-mat').toggleClass('position-changed');
			this.posChanged = !this.posChanged;
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

	colorlabel (e: string){
		  jQuery(e).toggleClass('add-color-label');
	}

	editTrigger(task: Task) {
		jQuery("#edit-window-" + task.id).toggleClass("start-no-display");
		if (!(jQuery('#s' + task.id).is(':checked'))){
			jQuery("#edit-window-" + task.id).removeClass("start-no-display");
		 	this.clickOnTaskInput(task.id);
	  }
	}

	clickOnTaskInput (id: number){
		jQuery('#s'+id).trigger("click");
	}


	//OPERACIONES CRUD

	/**
	 * Guarda las modificaciones hechas por el entrenador en los objetivos de la meta
	 */
	saveEdit(task: Task) {
		task.status = 0;
		this.editTrigger(task);
		this.taskService.editTask(task).subscribe(
			respose => console.log("Tarea editada!"),
			error => console.log(error)
		)
	}

	/**
	 * Completa una tarea (alumno directamente, entrenador en una tarea pendiente)
	 */
	completeTask(task: Task) {
		task.status = 1;
		this.taskService.editTask(task).subscribe(
			respose => console.log("Tarea completada!"),
			error => console.log(error)
		);
	}

	/**
	 * Elimina una tarea (solo entrendor)
	 */
	deleteTask(task: Task){
		var x = this.student.goal.tasks.indexOf(task);
		this.student.goal.tasks.splice(x, 1);
		this.taskService.deleteTask(task.id).subscribe(
			respose => console.log("Tarea eliminada!"),
			error => console.log(error)
		);
	}

	/**
	 * Guarda las modificaciones hechas por el alumno en los objetivos alcanzados
	 */
	taskToPending(task: Task){
		task.status = 2;
		this.taskService.editTask(task).subscribe(
			respose => {console.log("Tarea a pendiente!"); this.clickOnTaskInput(task.id)},
			error => console.log(error)
		);
	}
}
