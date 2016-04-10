import {Component, OnInit, Output,Input, EventEmitter} from 'angular2/core';
import {Alumno} from '../dataTypes/alumno';
import { Goal } from '../dataTypes/goal';
import {Student} from '../dataTypes/student';
import { Router } from 'angular2/router';

@Component({
  selector: 'student-detail',
  templateUrl: 'app/alumnos/alumno-detail.html',
  inputs: ['student']
})
export class AlumnoDetailComponent implements OnInit{

  @Input()
  student: Student;

  @Output()
  back = new EventEmitter<boolean>();

  goalDef: String;

  constructor(private _router: Router) {}

  ngOnInit(){
    if(this.student.goal != null){
      this.goalDef = this.getGoalDef(this.student.goal);
    }else{
      this.goalDef = "Sin meta";
    }
  }

  goBack(){
    this.back.emit(true);
  }

  /**
    -- REFACTORIZAR
    Los siguientes métodos deberian colocarse en una clase externa, para ser utilizados por otros componentes
    Si no, deberia usarse esta clase allí donde se quieran mostrar estos datos
  */

  getGoalDef(goal: Goal){
    switch (goal.type) {
      case 1:
        return "Adelgazar " + goal.campo_metaX + " Kg";
      case 2:
        return "Ganar " + goal.campo_metaX + " Kg";
      case 3:
        return "Recorrer " + goal.campo_metaX + " Km en " + goal.campo_metaY + " minutos";
      case 4:
        return "Levantar " + goal.campo_metaX + " Kg " + this.getModalidad(goal.campo_metaY);
      default:
        console.log("Meta corrupta");
    }
  }

  getModalidad(modalidad: number){
    switch (modalidad) {
      case 1:
        return "de pecho";
      case 2:
        return "de pierna";
      case 3:
        return "de brazo";
      default:
        console.log("Modalidad no válida");
        return "modalidad no registrada"
    }
  }

}
