import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Goal } from '../dataTypes/goal';
import { Trainer } from '../dataTypes/trainer';
import { StudentDetailComponent } from '../students/student-detail';
import { StudentService } from '../students/student-service';
import { Student } from '../students/student';
import { Autenticacion } from '../autenticacion/autenticacion';

@Component({
	selector: 'dashboard-admin',
  //styleUrls: ['app/dashboard-admin/dashboard-admin.css'],
  templateUrl: 'app/dashboard-admin/dashboard-admin.html',
	//directives: [StudentDetailComponent],
  providers: [StudentService, Autenticacion]
})

export class DashboardAdmin implements OnInit{

	students: Student[];
	trainers: Trainer[];

  constructor(private _studentService: StudentService, private aut: Autenticacion, private router: Router) { }

  ngOnInit() {
		this._studentService.getStudents().then(
			students => this.students = students
		);
  }

	public logOut(){
			this.aut.logOut();
			this.router.navigateByUrl("/login");
	}

}
