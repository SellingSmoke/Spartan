// /// <reference path="../../scripts/jquery.d.ts" />

import { bootstrap }    from 'angular2/platform/browser';
import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Goal } from '../../../models/goal';
import { Trainer } from '../../../models/trainer';
import { TrainerService } from '../../../services/trainer.service';
import { Student } from '../../../models/student';
import { AutenticacionService } from '../../../services/autenticacion.service';
import { GoalNamePipe } from '../../../pipes/student-pipes.pipe';

declare var jQuery:JQueryStatic;

@Component({
	selector: 'dashboard-admin',
  styleUrls: ['app/components/dashboard/dashboard-admin/table.css'],
  templateUrl: 'app/components/dashboard/dashboard-admin/dashboard-admin.html',
	pipes: [GoalNamePipe],
  providers: [TrainerService, AutenticacionService]
})

export class DashboardAdmin implements OnInit{

	students: Student[];
	trainers: Trainer[];

	studentSelected: Student;

	trainersNum: number;
	studentNum: number;

  constructor(private _trainerService: TrainerService, private aut: AutenticacionService, private router: Router) {
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

	goToDetails(student: Student){
			this.studentSelected = student;
	}

}
