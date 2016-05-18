// /// <reference path="../../scripts/jquery.d.ts" />

import { bootstrap }    from 'angular2/platform/browser';
import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Goal } from '../../../models/goal2.model';
import { User } from '../../../models/user.model';
import { AutenticacionService } from '../../../services/autenticacion.service';
import { GoalNamePipe } from '../../../pipes/student-pipes.pipe';

declare var jQuery:JQueryStatic;

@Component({
	selector: 'dashboard-admin',
	styleUrls: ['app/components/dashboard/admin-dashboard/table.css'],
  	templateUrl: 'app/components/dashboard/admin-dashboard/admin-dashboard.component.html',
	pipes: [GoalNamePipe],
  	providers: [AutenticacionService]
})

export class DashboardAdmin implements OnInit{

	students: User[];
	trainers: User[];

	studentSelected: User;

	trainersNum: number;
	studentNum: number;

  constructor(private aut: AutenticacionService, private router: Router) {
		this.studentNum = 0;
	}


	ngOnInit() {
		// PETICIONES A LA BBDD
	}

	public logOut(){
		this.aut.logOut();
	}

	goToDetails(student: User){
		this.studentSelected = student;
	}

	 public nombreCompleto(trainer):String{
		return trainer.name + " " + trainer.lastname;
	};

}
