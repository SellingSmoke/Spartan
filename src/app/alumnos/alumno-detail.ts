import {Component} from 'angular2/core';
import {Alumno} from './alumno';
import { Router } from 'angular2/router';

@Component({
  selector: 'alumno-detail',
  templateUrl: 'app/alumnos/alumno-detail.html',
  inputs: ['alumno']
})
export class AlumnoDetailComponent {
  alumno: Alumno;

  constructor(private _router: Router) { }

  goToAlumnoTask() {
    this._router.navigate(['DashboardAlumno', { id: this.alumno.id }]);
  }
}
