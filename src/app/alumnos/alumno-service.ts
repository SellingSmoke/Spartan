import {Alumno} from './alumno';
import {ALUMNOS} from '../recursos-estaticos';
import {Injectable} from 'angular2/core';

@Injectable()
export class AlumnoService {
  getAlumnos() {
    return Promise.resolve(ALUMNOS);
  }
}
