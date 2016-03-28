import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import { Alumno } from '../alumnos/alumno'
import { AlumnoService } from '../alumnos/alumno-service';

@Component({
	selector: 'dashboard-alumno',
  styleUrls: ['app/inicio/inicio.css'],
  templateUrl: 'app/dashboard-alumno/dashboard-alumno.html',
  providers: [AlumnoService]
})

export class DashboardAlumno{

	alumno: Alumno;

	constructor(
		private _alumnoService: AlumnoService,
		private _routeParams: RouteParams) {

			let id = +this._routeParams.get('id');
			console.log(id);
			this._alumnoService.getAlumno(id)
				.then(alumno => this.alumno = alumno);
	}

	goBack() {
    window.history.back();
  }

}
