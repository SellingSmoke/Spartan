export interface Task{
  id?: number;             // ID de la Tarea
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

export function newTask():Task{
  var task = {
      name: "",
      status: 0,
      description: "",
      type: 0,
      objective1: 0,
      format1: "km",
      result1: 0,
      objective2: 0,
      format2: "min",
      result2: 0
  }
  return task;
}

export function setType(type:number, task: Task):Task{
  if(type){
    task.type = 1;
    task.format1 = "repeticiones"
    task.format2 = "Kg"
  }else{
    task.type = 0;
    task.format1 = "Km"
    task.format2 = "minutos"
  }
  return task;
}
