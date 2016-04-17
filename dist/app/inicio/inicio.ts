import {Component, OnInit} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { DashboardEntrenador } from '../dashboard-entrenador/dashboard-entrenador';
import { DashboardAlumno } from '../dashboard-alumno/dashboard-alumno';
import { DashboardAdmin } from '../dashboard-admin/dashboard-admin';
import { Autenticacion } from '../autenticacion/autenticacion';
import { StudentService } from '../students/student-service';
import { Student } from '../students/student';

@Component({
 selector: 'inicio',
 styleUrls: ['app/inicio/inicio.css'],
 templateUrl: 'app/inicio/inicio.html',
 directives: [DashboardEntrenador, DashboardAlumno, DashboardAdmin],
 providers: [Autenticacion, StudentService]
})

export class Inicio{

 student: Student;
 seeStudentTasks: boolean;

 constructor(private aut: Autenticacion, private _studentService: StudentService) {
   this.seeStudentTasks = false;
     if(aut.esAlumno()){
       this._studentService.getStudent(1)
         .then(student => this.student = student);
     }else{
       this.student = undefined;
     }
  }

  getStudentDashBoard(student: Student){
    this.student = student;
    this.seeStudentTasks = true;
  }

  getTrainerDashBoard(){
    this.seeStudentTasks = false;
  }

}
