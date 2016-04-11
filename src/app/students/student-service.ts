import { STUDENTS } from '../recursos-estaticos';
import { Student } from '../students/student';
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

  /**
     Devuelve la meta del alumno, dado el id del alumno


  getStudentGoal(id: number){
    let goal = Promise.resolve(GOALS).then(
      goals => goals.filter(goal => goal.student_id === id)[0]
    );
    return goal;
  }
  */
}
