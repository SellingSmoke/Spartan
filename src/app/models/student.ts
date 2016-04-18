import {Goal} from './goal';

export interface Student {

  // Datos de la base de datos

  id: number;
  name: string;
  lastname: string;
  email: string;
  gender: number;
  age: number;
  registration_date: string;

  // Datos calculados para evitar cargar datos a cada consulta

  goal: Goal;
}
