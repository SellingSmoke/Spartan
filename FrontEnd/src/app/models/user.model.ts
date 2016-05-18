import {IGoal} from './goal2.model';

export interface User {

  // Datos de la base de datos

  id?: number;
  passwordHash?:string;
  trainerId: number;
  name: string;
  lastname: string;
  roles: string[];
  email: string;
  gender: number;
  birthday: number;
  registrationDate: number;

  goals: IGoal[];

  // Datos calculados para evitar cargar datos a cada consulta

  goal?: IGoal;
  img_url?:string;
}
