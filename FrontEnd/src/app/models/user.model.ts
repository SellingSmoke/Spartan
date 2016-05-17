import {IGoal} from './goal.model';

export interface User {

  // Datos de la base de datos

  id?: number;
  trainerId: number;
  name: string;
  lastname: string;
  roles: string[];
  email: string;
  gender: number;
  birthday: number;
  registrationDate: number;

  // Datos calculados para evitar cargar datos a cada consulta

  goal?: IGoal;
  img_url?:string;
}
