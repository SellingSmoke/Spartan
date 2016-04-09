import {Alumno} from '../dataTypes/alumno';
import {ALUMNOS} from '../recursos-estaticos';
import {Student} from '../dataTypes/student';
import {STUDENTS} from '../recursos-estaticos';
import {Injectable} from 'angular2/core';


@Injectable()
export class AlumnoService {
  getAlumnos() {
    return Promise.resolve(ALUMNOS);
  }

  getStudents() {
    return Promise.resolve(STUDENTS);
  }

  getAlumno(id: number) {
    let alumno = Promise.resolve(ALUMNOS).then(
      alumnos => alumnos.filter(alumno => alumno.id === id)[0]
    );
    console.log(alumno);
    return alumno;
  }
}
