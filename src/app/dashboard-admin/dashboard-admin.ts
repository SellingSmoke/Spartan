/// <reference path="../../scripts/jquery.d.ts" />
declare var jQuery:JQueryStatic;

import { bootstrap }    from 'angular2/platform/browser';
import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Goal } from '../dataTypes/goal';
import { Trainer } from '../dataTypes/trainer';
import { StudentDetailComponent } from '../students/student-detail';
import { TrainerService } from '../services/trainer-service';
import { Student } from '../students/student';
import { Autenticacion } from '../autenticacion/autenticacion';
import { GoalNamePipe } from '../students/student-pipes.pipe';


@Component({
	selector: 'dashboard-admin',
  styleUrls: ['app/dashboard-admin/table.css'],
  templateUrl: 'app/dashboard-admin/dashboard-admin.html',
	pipes: [GoalNamePipe],
  providers: [TrainerService, Autenticacion]
})

export class DashboardAdmin implements OnInit{

	students: Student[];
	trainers: Trainer[];

	trainersNum: number;
	studentNum: number;

  constructor(private _trainerService: TrainerService, private aut: Autenticacion, private router: Router) {
		this.studentNum = 0;
	}

	/*
	 *	Al cargar la vista
	 */

	ngAfterViewInit() {

	}

  ngOnInit() {
		this._trainerService.getTrainers().then(
			trainers => {
				this.trainers = trainers;
				this.trainersNum = trainers.length;
				for (let trainer of trainers) {
				    this.studentNum += trainer.students.length;
				}
			}
		);
  }

	public logOut(){
			this.aut.logOut();
			this.router.navigateByUrl("/login");
	}

	goToDetails(){
			alert("Esto te deberia mostrar algo del alumno");
	}

}
