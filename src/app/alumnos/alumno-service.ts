import {Alumno} from '../dataTypes/alumno';
import {ALUMNOS,STUDENTS, GOALS} from '../recursos-estaticos';
import {Student} from '../dataTypes/student';
import {Injectable} from 'angular2/core';

@Injectable()
export class AlumnoService {

  getStudents() {
    return Promise.resolve(STUDENTS);
  }

  getGoal(id: number){
    let goal = Promise.resolve(GOALS).then(
      goals => goals.filter(goal => goal.student_id === id)[0]
    );
    return goal;
  }

  getStudent(id: number) {
    let student = Promise.resolve(STUDENTS).then(
      alumnos => alumnos.filter(student => student.id === id)[0]
    );
    return student;
  }

  // Métodos a borrar (-- Deprecated --)

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
