export interface Task {

  id: number;             // ID de la Tarea
  name: string;           // Nombre de la Tarea
  goal_id: number;        // ID de la meta a la que pertenece
  description: string;    // Descripcion de la Tarea
  type: number;           // Tipo de Tarea (1 para aerobicas, 2 para anaeróbicas)

  objective1: number;     // Objetivo 1              (Repeticiones/Distancia)
  format1: string;        // Formato del objetivo 1  (NºRepeticiones/Km)
  result1: number;        // Resultado del alumno 1  (Repeticiones/Distancia)

  objective2: number;     // Objetivo 2              (Peso/Tiempo)
  format2: string;        // Formato del objetivo 2  (Kg, Horas, Minutos)
  result2: number;        // Resultado del alumno 2  (Peso/Tiempo)
}
