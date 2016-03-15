import {Component} from 'angular2/core';
import {Alumno} from './alumno';

@Component({
  selector: 'alumno-detail',
  template: `
    <div *ngIf="alumno">
      <h2>Cosas de {{alumno.name}}</h2>
      <div>
        <input [(ngModel)]="alumno.tarea" placeholder="Ponle mas tarea" class="form-control" id="focusedInput1" type="text">
      </div>
      <div>
        <p>Tarea de {{alumno.name}}</p>
        <p> - {{alumno.tarea}}</p>
      </div>
    </div>
  `,
  inputs: ['alumno']
})
export class AlumnoDetailComponent {
  alumno: Alumno;
}
