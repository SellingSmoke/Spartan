import { Comment } from './comment.model';
import { Task } from './task.model';
import { Diet } from './diet.model';

export interface Goal {

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

  active: boolean;
  acepted: boolean;
  canceled: boolean;

  diet?: Diet;       // Una meta puede o no llevar una dieta asociada
  comments?: Comment[];
  tasks?: Task[];

}

export function newGoal(type:number, campoX:string):Goal{
  var goal = {
    progress: 0,
    type: type,
    campoMetaX: campoX,
    active: true,
    acepted: false,
    canceled: false,
    diet: undefined,
    comments: [],
    tasks: [],
  }
  return goal;
}
