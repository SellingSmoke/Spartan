import { Component, OnInit, Output,Input, EventEmitter } from 'angular2/core';
import { Student } from '../students/student';
import { Router } from 'angular2/router';
import * as GoalMethods from '../dataTypes/goal';

@Component({
  selector: 'student-detail',
  templateUrl: 'app/students/student-detail.html',
  inputs: ['student']
})

export class StudentDetailComponent implements OnInit {

  @Input()
  student: Student;

  @Output()
  back = new EventEmitter<boolean>();

  goalDef: String;

  constructor(private _router: Router) {}

  ngOnInit(){
    if(this.student.goal != null){
      this.goalDef = GoalMethods.getGoalDef(this.student.goal);
    }else{
      this.goalDef = "Sin meta";
    }
  }

  /**
      Metodo que envia un evento al padre para poder dar la vuelta a la tarjeta
  */

  goBack(){
    this.back.emit(true);
  }

}
