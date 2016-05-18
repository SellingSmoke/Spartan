import {Component, OnInit} from 'angular2/core';
import { Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { DashboardEntrenador } from './trainer-dashboard/trainer-dashboard.component';
import { DashboardAlumno } from './student-dashboard/student-dashboard.component';
import { DashboardAdmin } from './admin-dashboard/admin-dashboard.component';
import { AutenticacionService } from '../../services/autenticacion.service';
import { User } from '../../models/user.model';

@Component({
 selector: 'inicio',
 styleUrls: ['app/components/dashboard/inicio.css'],
 templateUrl: 'app/components/dashboard/inicio.html',
 directives: [DashboardEntrenador, DashboardAlumno, DashboardAdmin],
 providers: [AutenticacionService]
})

export class Inicio{

 student: User;
 seeStudentTasks: boolean;

 constructor(private aut: AutenticacionService) {
     this.seeStudentTasks = false;
     if(aut.esAlumno()){
       this.student = this.aut.User();
     }else{
       this.student = undefined;
     }
  }

  getStudentDashBoard(student: User){
    this.student = student;
    this.seeStudentTasks = true;
  }

  getTrainerDashBoard(){
    this.seeStudentTasks = false;
  }

}
