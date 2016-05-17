import { IComment } from './comment2.model';
import { ITask } from './task2.model';
import { IDiet } from './diet2.model';

export interface IGoal {

  id?: number;             // ID de la Meta
  //studentId: number;     // ID del alumno al que pertenece la meta
  progress: number;       // Progreso de la Meta (Calculada en el servidor por tareas completadas)
  type: number;
  // Tipo de meta:
  // ["perder peso","ganar musculo", "ganar resistencia" , "trabajar especificamente", "mejorar en", "otra"];

  campoMetaX: string;    // Parametro X del tipo (Kg,Km)
  // campo_metaY: number;    // Parametro Y del tipo (Minutos, Modalidad)

  // Modalidades:
  // -> 0 (Vacio)
  // -> 1 Pecho
  // -> 2 Pierna
  // -> 3 ... (Por completar)

  acepted: boolean;
  canceled: boolean;

  diet?: IDiet;       // Una meta puede o no llevar una dieta asociada
  comments?: IComment[];
  tasks?: ITask[];

}

export class Goal implements Goal{
    id:number;
    studentId:number;
    progress:number;
    type:number;
    campoMetaX:string;
    acepted: boolean;
    canceled: boolean;
    diet: IDiet;
    comments: IComment[];
    tasks: ITask[];

    constructor(s_id: number, type: number, c_x: string){
      this.studentId = s_id;
      this.progress = 0;
      this.type = type;
      this.campoMetaX = c_x;
      this.acepted = false;
      this.canceled = false;
      this.diet = null;
      this.comments = [];
      this.tasks = [];
    }

}
