import { Student } from './student';

export interface Trainer {

  // Datos de la base de datos

  id: number;
  name: string;
  lastname: string;
  email: string;
  gender: number;
  age: number;
  registration_date: number;

  students: Student[];

}
