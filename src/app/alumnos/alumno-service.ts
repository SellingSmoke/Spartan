import {Alumno} from './alumno';
import {ALUMNOS} from './alumnos-list';
import {Injectable} from 'angular2/core';

@Injectable()
export class AlumnoService {
  getAlumnos() {
    return Promise.resolve(ALUMNOS);
  }

  getAlumnosSlowly() {
    return new Promise<Alumno[]>(resolve =>
      setTimeout(()=>resolve(ALUMNOS), 2000) // 2 seconds
    );
  }
}
