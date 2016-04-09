import {Component, Output, EventEmitter} from 'angular2/core';
import {Alumno} from '../dataTypes/alumno';
import {Student} from '../dataTypes/student';
import { Router } from 'angular2/router';

@Component({
  selector: 'student-detail',
  templateUrl: 'app/alumnos/alumno-detail.html',
  inputs: ['student']
})
export class AlumnoDetailComponent {
  student: Student;

  @Output()
  back = new EventEmitter<boolean>();

  constructor(private _router: Router) { }

  goToAlumnoTask() {
    this._router.navigate(['DashboardAlumno', { id: this.student.id }]);
  }

  goBack(){
    this.back.emit(true);
  }
}
