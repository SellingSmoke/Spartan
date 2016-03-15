import {Component} from 'angular2/core';
import {Alumno} from './alumno';

@Component({
  selector: 'alumno-detail',
  templateUrl: 'app/alumnos/alumno-detail.html',
  inputs: ['alumno']
})
export class AlumnoDetailComponent {
  alumno: Alumno;
}
