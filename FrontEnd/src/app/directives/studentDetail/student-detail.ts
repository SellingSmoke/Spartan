import { Component,Input } from 'angular2/core';
import { User } from '../../models/user.model';
import { Router } from 'angular2/router';
import { BeautifyProgessBarPipe, GoalNamePipe, GenderPipe } from '../../pipes/student-pipes.pipe';

@Component({
  selector: 'student-detail',
  templateUrl: 'app/directives/studentDetail/student-detail.html',
  inputs: ['student'],
  pipes: [BeautifyProgessBarPipe, GoalNamePipe, GenderPipe]
})

export class StudentDetailComponent{

  @Input()
  student: User;

  constructor(private _router: Router) {}

  /**
	 * Devuelve el progreso del alumno
	 */
	 progress():number{
		 if(this.student.goal != null){
			 var completadas = this.student.goal.tasks.filter( t => t.status == 1).length;
			 var totales = this.student.goal.tasks.length;
			 return (completadas/totales) * 100
		 }
		 return 0;
	 }

   anyos(){
 		return Math.floor(parseInt(((Date.now() - this.student.birthday) / (1000 * 60 * 60 * 24* 365)).toFixed(1)));
 	 }

}
