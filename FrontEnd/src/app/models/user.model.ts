import {Goal} from './goal.model';

export interface User {

  // Datos de la base de datos

  id?: number;
  passwordHash?:string;
  trainerId: number;
  name: string;
  lastname: string;
  roles: string[];
  email: string;
  gender: string;
  birthday: number;
  registrationDate: number;

  goals: Goal[];

  // Datos calculados para evitar cargar datos a cada consulta


  goal?: Goal;
  imageUrl?:string;

}
