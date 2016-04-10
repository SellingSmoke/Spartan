import {Alumno} from '../dataTypes/alumno';
import {ALUMNOS, GOALS} from '../recursos-estaticos';
import {Injectable} from 'angular2/core';

@Injectable()
export class AlumnoService {

  getAlumnos() {
    return Promise.resolve(ALUMNOS);
  }

  getAlumno(id: number) {
    let alumno = Promise.resolve(ALUMNOS).then(
      alumnos => alumnos.filter(alumno => alumno.id === id)[0]
    );
    return alumno;
  }
}
