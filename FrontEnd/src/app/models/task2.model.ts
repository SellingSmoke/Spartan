export interface ITask{
  id: number;             // ID de la Tarea
  name: string;           // Nombre de la Tarea
  status: number;         // 0: to do | 1: completed | 2: pending
  description: string;    // Descripcion de la Tarea
  type: number;           // Tipo de Tarea (0 para aerobicas, 1 para anaeróbicas)

  objective1: number;     // Objetivo 1              (Repeticiones/Distancia)
  format1: string;        // Formato del objetivo 1  (NºRepeticiones/Km)
  result1: number;        // Resultado del alumno 1  (Repeticiones/Distancia)

  objective2: number;     // Objetivo 2              (Peso/Tiempo)
  format2: string;        // Formato del objetivo 2  (Kg, Horas, Minutos)
  result2: number;        // Resultado del alumno 2  (Peso/Tiempo)
}

var i = 5;

export class Task implements ITask{

  id: number;             // ID de la Tarea
  name: string;           // Nombre de la Tarea
  status: number;         // 0: to do | 1: completed | 2: pending
  description: string;    // Descripcion de la Tarea
  type: number;           // Tipo de Tarea (0 para aerobicas, 1 para anaeróbicas)

  objective1: number;     // Objetivo 1              (Repeticiones/Distancia)
  format1: string;        // Formato del objetivo 1  (NºRepeticiones/Km)
  result1: number;        // Resultado del alumno 1  (Repeticiones/Distancia)

  objective2: number;     // Objetivo 2              (Peso/Tiempo)
  format2: string;        // Formato del objetivo 2  (Kg, Horas, Minutos)
  result2: number;        // Resultado del alumno 2  (Peso/Tiempo)

  constructor(goal_id?: number, task?: ITask) {

    if(goal_id != null){
      this.result1 = 0;
      this.result2 = 0;
      this.status = 0;
      this.id = i + 1;
      i++;
    }
    if(task != null){
      this.fromJSON(task);
    }

  }

  setType(type: number){
    if(type){
      this.type = 1;
      this.format1 = "repeticiones"
      this.format2 = "Kg"
    }else{
      this.type = 0;
      this.format1 = "Km"
      this.format2 = "minutos"
    }
  }

  toJSON(): ITask{
      return {
          id: -1,
          name: this.name,
          status: this.status,
          description: this.description,
          type: this.type,
          objective1: this.objective1,
          format1: this.format1,
          result1: this.result1,
          objective2: this.objective2,
          format2:this.format2,
          result2: this.result2
      };
  }

  fromJSON(task: ITask) {
    this.id = task.id;
    this.status = task.status;
    this.name = task.name;
    this.description = task.description;
    this.type = task.type;
    this.objective1 = task.objective1;
    this.format1 = task.format1;
    this.result1 = task.result1;
    this.objective2 = task.objective2
    this.format2 = task.format2;
    this.result2 = task.result2;
  }

}


export function parseArray(jTasks: ITask[]){
  var tasks = new Array<Task>();
  for(let task of jTasks){
    tasks.push(new Task(null,task));
  }
  return tasks;
}
