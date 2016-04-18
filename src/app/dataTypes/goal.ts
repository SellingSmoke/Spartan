export interface Goal {

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

  diet_id?: number;       // Una meta puede o no llevar una dieta asociada

}
