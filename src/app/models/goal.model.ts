import { IComment } from './comment.model';

export interface IGoal {

  id: number;             // ID de la Meta
  student_id: number;     // ID del alumno al que pertenece la meta
  progress: number;       // Progreso de la Meta (Calculada en el servidor por tareas completadas)
  type: number;
  // Tipo de meta:
  // ["perder peso","ganar musculo", "ganar resistencia" , "trabajar especificamente", "mejorar en", "otra"];

  campo_metaX: string;    // Parametro X del tipo (Kg,Km)
  // campo_metaY: number;    // Parametro Y del tipo (Minutos, Modalidad)

  // Modalidades:
  // -> 0 (Vacio)
  // -> 1 Pecho
  // -> 2 Pierna
  // -> 3 ... (Por completar)

  acepted: boolean;
  canceled: boolean;

  diet_id: number;       // Una meta puede o no llevar una dieta asociada
  comments: IComment[];

}

export class Goal implements Goal{
    id:number;
    student_id:number;
    progress:number;
    type:number;
    campo_metaX:string;
    acepted: boolean;
    canceled: boolean;
    diet_id: number; 
    comments: IComment[];

    constructor(s_id: number, type: number, c_x: string){
      this.student_id = s_id;
      this.progress = 0;
      this.type = type;
      this.campo_metaX = c_x;
      this.acepted = false;
      this.canceled = false;
      this.diet_id = -1;
      this.comments = [];
    }

}
