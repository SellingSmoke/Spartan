import {Component, OnInit} from 'angular2/core';
import { Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { DashboardEntrenador } from './trainer-dashboard/trainer-dashboard.component';
import { DashboardAlumno } from './student-dashboard/student-dashboard.component';
import { DashboardAdmin } from './admin-dashboard/admin-dashboard.component';
import { AutenticacionService } from '../../services/autenticacion.service';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';

@Component({
 selector: 'inicio',
 styleUrls: ['app/components/dashboard/inicio.css'],
 templateUrl: 'app/components/dashboard/inicio.html',
 directives: [DashboardEntrenador, DashboardAlumno, DashboardAdmin],
 providers: [AutenticacionService, StudentService]
})

export class Inicio{

 student: Student;
 seeStudentTasks: boolean;

 constructor(private aut: AutenticacionService, private _studentService: StudentService) {
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
