import { STUDENTS } from '../recursos-estaticos';
import { Student } from '../models/student.model';
import { Injectable } from 'angular2/core';

@Injectable()
export class StudentService {

  /**
     Devuelve todos los alumnos
  */

  getStudents() {
    return Promise.resolve(STUDENTS);
  }

  /**
     Devuelve el alumno con el id especificado
  */

  getStudent(id: number) {
    let student = Promise.resolve(STUDENTS).then(
      alumnos => alumnos.filter(student => student.id === id)[0]
    );
    return student;
  }

}
